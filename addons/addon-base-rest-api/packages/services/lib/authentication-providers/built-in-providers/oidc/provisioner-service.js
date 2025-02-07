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

const Service = require('@amzn/base-services-container/lib/service');
const axios = require('axios').default;
const authProviderConstants = require('../../constants').authenticationProviders;

const settingKeys = {
  websiteUrl: 'websiteUrl',
  oidcIssuer: 'oidcIssuer',
  oidcClientId: 'oidcClientId',
};

class ProvisionerService extends Service {
  constructor() {
    super();
    this.dependency(['aws', 'authenticationProviderConfigService']);
    this.boom.extend(['authProviderAlreadyExists', 400]);
    this.boom.extend(['noAuthProviderFound', 400]);
    this.boom.extend(['oidcConfigurationFailed', 400]);
  }

  // eslint-disable-next-line no-unused-vars
  async provision({ providerTypeConfig, providerConfig }) {
    this.log.info('Provisioning oidc Authentication Provider');

    const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');

    const websiteUrl = this.settings.get(settingKeys.websiteUrl);
    const oidcClientId = this.settings.get(settingKeys.oidcClientId);

    const { jwksUri, authorizationEndpoint, endSessionEndpoint, tokenEndpoint } = await this.getIdPConfigurations();

    providerConfig.jwksUri = jwksUri;
    providerConfig.signInUri = `${authorizationEndpoint}?client_id=${oidcClientId}&redirect_uri=${websiteUrl}/&scope=openid profile email&code_challenge_method=S256&code_challenge=TEMP_PKCE_VERIFIER&state=TEMP_STATE_VERIFIER&response_type=code`;
    providerConfig.signOutUri = `${endSessionEndpoint}?id_token_hint=ID_TOKEN_PLACE_HOLDER&post_logout_redirect_uri=${websiteUrl}/`;
    providerConfig.authCodeTokenExchangeUri = tokenEndpoint;

    this.log.info('Saving oidc Authentication Provider Configuration.');

    // Save auth provider configuration and make it active
    const result = await authenticationProviderConfigService.saveAuthenticationProviderConfig({
      providerTypeConfig,
      providerConfig,
      status: authProviderConstants.status.active,
    });
    return result;
  }

  async getIdPConfigurations() {
    const oidcIssuer = this.settings.get(settingKeys.oidcIssuer);
    const configUrl = `${oidcIssuer}/.well-known/openid-configuration`;
    try {
      const response = await axios.get(configUrl);
      const jwksUri = response.data.jwks_uri;
      const authorizationEndpoint = response.data.authorization_endpoint;
      const endSessionEndpoint = response.data.end_session_endpoint;
      const tokenEndpoint = response.data.token_endpoint;
      return { jwksUri, authorizationEndpoint, endSessionEndpoint, tokenEndpoint };
    } catch (error) {
      throw this.boom.oidcConfigurationFailed('Get oidc configuration failed, please try it again', true);
    }
  }
}

module.exports = ProvisionerService;
