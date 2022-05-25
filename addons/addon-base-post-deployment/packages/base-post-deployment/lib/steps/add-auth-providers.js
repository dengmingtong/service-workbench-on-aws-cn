/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

const _ = require('lodash');
const Service = require('@amzn/base-services-container/lib/service');
const { getSystemRequestContext } = require('@amzn/base-services/lib/helpers/system-context');
const authProviderConstants = require('@amzn/base-api-services/lib/authentication-providers/constants')
  .authenticationProviders;

const settingKeys = {
  awsRegion: 'awsRegion',
  envName: 'envName',
  solutionName: 'solutionName',
  enableNativeUserPoolUsers: 'enableNativeUserPoolUsers',
  fedIdpIds: 'fedIdpIds',
  fedIdpNames: 'fedIdpNames',
  fedIdpDisplayNames: 'fedIdpDisplayNames',
  fedIdpMetadatas: 'fedIdpMetadatas',
  defaultAuthNProviderTitle: 'defaultAuthNProviderTitle',
  cognitoAuthNProviderTitle: 'cognitoAuthNProviderTitle',
  cognitoUserPoolDomainPrefix: 'cognitoUserPoolDomainPrefix',
  keyCloakRealm: 'keyCloakRealm',
  keyCloakClientId: 'keyCloakClientId',
  keyCloakUrl: 'keyCloakUrl',
  rootUserEmail: 'rootUserEmail',
  rootUserFirstName: 'rootUserFirstName',
  rootUserLastName: 'rootUserLastName',
  defaultIdpType: 'defaultIdpType',
  websiteUrl: 'websiteUrl',
};

class AddAuthProviders extends Service {
  constructor() {
    super();
    this.dependency([
      'aws',
      'authenticationProviderConfigService',
      'authenticationProviderTypeService',
      'cognitoUserPoolAuthenticationProvisionerService',
      'keycloakAuthenticationProvisionerService',
    ]);
  }

  /**
   * Configure Cognito Authentication Provider. The step method below invokes the cognito auth provider "Provisioner" service.
   * The service will do the followings
   * 1. Create cognito user pool, if it doesn't exist
   * 2. Create and configure application client for this solution in the cognito user pool
   * 3. Configure identity providers in the cognito user pool
   * 4. Configure cognito user pool domain for the client application
   */
  async addCognitoAuthenticationProviderWithSamlFederation() {
    // Get settings
    const envName = this.settings.get(settingKeys.envName);
    const solutionName = this.settings.get(settingKeys.solutionName);
    const cognitoUserPoolDomainPrefix = this.settings.get(settingKeys.cognitoUserPoolDomainPrefix);

    const enableNativeUserPoolUsers = this.settings.getBoolean(settingKeys.enableNativeUserPoolUsers);

    const fedIdpIds = this.settings.optionalObject(settingKeys.fedIdpIds, []);
    const fedIdpNames = this.settings.optionalObject(settingKeys.fedIdpNames, []);
    const fedIdpDisplayNames = this.settings.optionalObject(settingKeys.fedIdpDisplayNames, []);
    const fedIdpMetadatas = this.settings.optionalObject(settingKeys.fedIdpMetadatas, []);

    // If user pools aren't enabled and no IdPs are configured, skip user pool creation
    const idpsNotConfigured = [fedIdpIds, fedIdpNames, fedIdpDisplayNames, fedIdpMetadatas].some(
      array => array.length === 0,
    );
    if (!enableNativeUserPoolUsers && idpsNotConfigured) {
      this.log.info('Cognito user pool not enabled in settings; skipping creation');
      return;
    }

    // Construct base auth provider config
    const federatedIdentityProviders = await Promise.all(
      fedIdpIds.map(async (idpId, idx) => {
        return {
          id: idpId,
          name: fedIdpNames[idx],
          displayName: fedIdpDisplayNames[idx],
          metadata: fedIdpMetadatas[idx],
        };
      }),
    );

    const userPoolName = `${envName}-${solutionName}-userPool`;
    const cognitoAuthProviderConfig = {
      title: this.settings.get(settingKeys.cognitoAuthNProviderTitle),
      userPoolName,
      clientName: `${envName}-${solutionName}-client`,
      userPoolDomain: cognitoUserPoolDomainPrefix,
      enableNativeUserPoolUsers,
      federatedIdentityProviders,
    };

    // Define auth provider type config
    const authenticationProviderTypeService = await this.service('authenticationProviderTypeService');
    const authenticationProviderTypes = await authenticationProviderTypeService.getAuthenticationProviderTypes(
      getSystemRequestContext(),
    );

    const cognitoAuthProviderTypeConfig = _.find(authenticationProviderTypes, {
      type: authProviderConstants.cognitoAuthProviderTypeId,
    });

    // Check whether user pool already exists
    const aws = await this.service('aws');
    const cognitoIdentityServiceProvider = new aws.sdk.CognitoIdentityServiceProvider();
    // TODO: Handle pagination (hopefully there aren't more than 1000 user pools)
    const result = await cognitoIdentityServiceProvider.listUserPools({ MaxResults: '60' }).promise();
    const userPool = _.find(result.UserPools, { Name: userPoolName });

    let authProviderExists = false;
    if (userPool) {
      // If pool exists, set its ID in the config so it can be updated
      cognitoAuthProviderConfig.userPoolId = userPool.Id;

      // If pool exists, set userPoolDomain to existing value
      const userPoolDetailResult = await cognitoIdentityServiceProvider
        .describeUserPool({ UserPoolId: userPool.Id })
        .promise();
      cognitoAuthProviderConfig.userPoolDomain = userPoolDetailResult.UserPool.Domain;

      // Verify that the stored auth provider config also exists
      const awsRegion = this.settings.get(settingKeys.awsRegion);
      const awsSuffix = this.awsSuffix;
      const authProviderId = `https://cognito-idp.${awsRegion}.${awsSuffix}/${userPool.Id}`;

      const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');
      authProviderExists = !!(await authenticationProviderConfigService.getAuthenticationProviderConfig(
        authProviderId,
      ));

      if (authProviderExists) {
        cognitoAuthProviderConfig.id = authProviderId;
      }
    }

    // Create or update user pool
    const action = authProviderExists
      ? authProviderConstants.provisioningAction.update
      : authProviderConstants.provisioningAction.create;

    const cognitoAuthenticationProvisionerService = await this.service(
      'cognitoUserPoolAuthenticationProvisionerService',
    );
    await cognitoAuthenticationProvisionerService.provision({
      providerTypeConfig: cognitoAuthProviderTypeConfig,
      providerConfig: cognitoAuthProviderConfig,
      action,
    });
  }

  /**
   * Configure Cognito Authentication Provider. The step method below invokes the cognito auth provider "Provisioner" service.
   * The service will do the followings
   * 1. Create cognito user pool, if it doesn't exist
   * 2. Create and configure application client for this solution in the cognito user pool
   * 3. Configure identity providers in the cognito user pool
   * 4. Configure cognito user pool domain for the client application
   */
   async addKeycloakAuthenticationProviderWithSamlFederation() {

    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 1');
    const defaultIdpType = this.settings.get(settingKeys.defaultIdpType);
    const keyCloakRealm = this.settings.get(settingKeys.keyCloakRealm);
    const keyCloakClientId = this.settings.get(settingKeys.keyCloakClientId);
    const keyCloakUrl = this.settings.get(settingKeys.keyCloakUrl);
    const websiteUrl = this.settings.get(settingKeys.websiteUrl);
    const enableNativeUserPoolUsers = this.settings.getBoolean(settingKeys.enableNativeUserPoolUsers);

    // // Construct base auth provider config
    // const federatedIdentityProviders = await Promise.all(
    //   fedIdpIds.map(async (idpId, idx) => {
    //     return {
    //       id: idpId,
    //       name: fedIdpNames[idx],
    //       displayName: fedIdpDisplayNames[idx],
    //       borkerUri: `${keyCloakUrl}/realms/${keyCloakRealm}/broker/${idpId}/login?client_id=${keyCloakClientId}&redirect_uri=${websiteUrl}/&code_challenge_method=S256&code_challenge=TEMP_PKCE_VERIFIER&state=TEMP_STATE_VERIFIER&response_type=code`,
    //     };
    //   }),
    // );  

    const keycloakAuthProviderConfig = {
      id: `${keyCloakUrl}/auth/realms/${keyCloakRealm}`,
      title: defaultIdpType,
      clientId: keyCloakClientId,
      enableNativeUserPoolUsers,
      // federatedIdentityProviders,
    };

    // console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 2, federatedIdentityProviders', federatedIdentityProviders);      
    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 2, keycloakAuthProviderConfig', keycloakAuthProviderConfig);      

    // Define auth provider type config
    const authenticationProviderTypeService = await this.service('authenticationProviderTypeService');
    const authenticationProviderTypes = await authenticationProviderTypeService.getAuthenticationProviderTypes(
      getSystemRequestContext(),
    );

    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 3, authenticationProviderTypes', authenticationProviderTypes);
    const keycloakAuthProviderTypeConfig = _.find(authenticationProviderTypes, {
      type: authProviderConstants.keycloakAuthProviderTypeId,
    });

    let authProviderExists = false;
    const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');
    authProviderExists = !!(await authenticationProviderConfigService.getAuthenticationProviderConfig(
      keycloakAuthProviderConfig.id,
    ));

    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 4');

    // Create or update user pool
    const action = authProviderExists
      ? authProviderConstants.provisioningAction.update
      : authProviderConstants.provisioningAction.create;

    const keycloakAuthenticationProvisionerService = await this.service(
      'keycloakAuthenticationProvisionerService',
    );
    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 5, keycloakAuthProviderTypeConfig', keycloakAuthProviderTypeConfig);
    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 5, keycloakAuthProviderConfig', keycloakAuthProviderConfig);
    console.log('addKeycloakAuthenticationProviderWithSamlFederation mingtong step 5, action', action);
    await keycloakAuthenticationProvisionerService.provision({
      providerTypeConfig: keycloakAuthProviderTypeConfig,
      providerConfig: keycloakAuthProviderConfig,
      action,
    });
  }  

  async execute() {
    // Setup auth provider according to defaultIdpType config
    // federated IdP auth provider (if configured)
    const defaultIdpType = this.settings.get(settingKeys.defaultIdpType);
    switch (defaultIdpType) {
      case 'keycloak':
        await this.addKeycloakAuthenticationProviderWithSamlFederation();
        break;
      case 'cognito':
        await this.addCognitoAuthenticationProviderWithSamlFederation();
        break;
      default:
        console.log(`Sorry, we are out of ${defaultIdpType}.`);
    } 
  }
}

module.exports = AddAuthProviders;
