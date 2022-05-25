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

const { getKeycloakTokenVerifier } = require('./keycloak-token-verifier');

const settingKeys = {
  keyCloakUrl: 'keyCloakUrl',
  keyCloakRealm: 'keyCloakRealm',
};

class ProviderService extends Service {
  constructor() {
    super();
    this.dependency(['aws', 'userService', 'userAttributesKeycloakMapperService', 'tokenRevocationService']);
    this.keycloakTokenVerifiersCache = {}; // Cache object containing token verifier objects. Each token verifier is keyed by the userPoolUri
  }

  async validateToken({ token, issuer }, providerConfig) {
    const keyCloakRealm = this.settings.get(settingKeys.keyCloakRealm);
    const keyCloakUrl = this.settings.get(settingKeys.keyCloakUrl);    
    this.log.info('keycloak validateToken mingtong step 1');
    if (_.isEmpty(token)) {
      throw this.boom.forbidden('no jwt token was provided', true);
    }
    // -- Check if this token is revoked (may be due to an earlier logout)
    const tokenRevocationService = await this.service('tokenRevocationService');
    const isRevoked = await tokenRevocationService.isRevoked({ token });
    if (isRevoked) {
      throw this.boom.invalidToken('The token is revoked', true);
    }
    this.log.info('keycloak validateToken mingtong step 2');
    // In case of cognito, the issuer is the cognito userPoolUri
    this.log.info('keycloak validateToken mingtong step 2-1， issuer：', issuer);
    let keycloakTokenVerifier = this.keycloakTokenVerifiersCache[issuer];
    this.log.info('keycloak validateToken mingtong step 3, keycloakTokenVerifier', keycloakTokenVerifier);
    if (!keycloakTokenVerifier) {
      this.log.info('keycloak validateToken mingtong step 4');
      // No cognitoTokenVerifier in the cache so create a new one
      keycloakTokenVerifier = await getKeycloakTokenVerifier(keyCloakUrl, keyCloakRealm);
      // Add newly created cognitoTokenVerifier to the cache
      this.keycloakTokenVerifiersCache[issuer] = keycloakTokenVerifier;
    }
    // User the cognitoTokenVerifier to validate cognito token
    this.log.info('keycloak validateToken mingtong step 5, token', token);
    const verifiedToken = await keycloakTokenVerifier.verify(token);
    this.log.info('keycloak validateToken mingtong step 6, verifiedToken', verifiedToken);
    const { uid, username, identityProviderName } = await this.saveUser(verifiedToken, providerConfig.config.id);
    this.log.info('keycloak validateToken mingtong step 7');
    return { verifiedToken, username, uid, identityProviderName };
  }

  async saveUser(decodedToken, authenticationProviderId) {
    this.log.info('keycloak validateToken saveUser mingtong step 1, decodedToken', decodedToken);
    this.log.info('keycloak validateToken saveUser mingtong step 2, authenticationProviderId', authenticationProviderId);
    const userAttributesMapperService = await this.service('userAttributesKeycloakMapperService');
    // Ask user attributes mapper service to read information from the decoded token and map them to user attributes
    const userAttributes = await userAttributesMapperService.mapAttributes(decodedToken);
    
    this.log.info('keycloak validateToken saveUser mingtong step 4, userAttributes', userAttributes);
    // If this user is authenticated via SAML or native user pool then we need to add it to our user table if it doesn't exist already
    const userService = await this.service('userService');

    const user = await userService.findUserByPrincipal({
      username: userAttributes.username,
      authenticationProviderId,
      identityProviderName: 'keycloak',
    });
    console.log('keycloak validateToken saveUser mingtong step 5-1, user', user);
    if (user) {
      this.log.info('keycloak validateToken saveUser mingtong step 6, user', user);
      await this.updateUser(userAttributes, user);
      userAttributes.uid = user.uid;
    } else {
      this.log.info('keycloak validateToken saveUser mingtong step 7, user', user);
      const createdUser = await this.createUser(authenticationProviderId, userAttributes);
      userAttributes.uid = createdUser.uid;
    }
    this.log.info('keycloak validateToken saveUser mingtong step 5, userAttributes', userAttributes);
    return userAttributes;
  }

  /**
   * Creates a user in the system based on the user attributes provided by the SAML Identity Provider (IdP)
   * @param authenticationProviderId ID of the authentication provider
   * @param userAttributes An object containing attributes mapped from SAML IdP
   * @returns {Promise<void>}
   */
  async createUser(authenticationProviderId, userAttributes) {
    const userService = await this.service('userService');
    try {
      return userService.createUser(getSystemRequestContext(), {
        authenticationProviderId,
        ...userAttributes,
      });
    } catch (err) {
      this.log.error(err);
      throw this.boom.badRequest(`Error creating user: ${err.message}`, true);
    }
  }

  /**
   * Updates user in the system based on the user attributes provided by the SAML Identity Provider (IdP).
   * This base implementation updates only those user attributes in the system which are missing or outdated but are available in
   * the SAML user attributes.
   *
   * @param userAttributes An object containing attributes mapped from SAML IdP
   * @param existingUser The existing user in the system
   *
   * @returns {Promise<void>}
   */
  async updateUser(userAttributes, existingUser) {
    // Find all attributes present in the userAttributes but missing in existingUser
    const missingAttribs = {};
    const updatedAttribs = {};
    const keys = _.keys(userAttributes);
    if (!_.isEmpty(keys)) {
      _.forEach(keys, key => {
        const value = userAttributes[key];
        const existingValue = existingUser[key];

        // check if the attribute is missing in the existingUser object but present in
        // userAttributes (i.e., the user attributes mapped from SAML assertions)
        if (_.isNil(existingValue)) {
          missingAttribs[key] = value;
        }
      });

      // When IdP users are created via SWB UI, by default we use the username part of provided email address as first and last names
      // To update these default names, we extract the mapped attribute values coming from the Cognito token
      // Some IdPs send email value in their firstName and lastName attribute fields, so splitting string to ignore domain
      const updateIfDifferent = attribName => {
        if (
          !_.isUndefined(userAttributes[attribName]) &&
          existingUser[attribName] !== userAttributes[attribName].split('@')[0]
        ) {
          updatedAttribs[attribName] = userAttributes[attribName].split('@')[0];
        }
      };
      updateIfDifferent('firstName');
      updateIfDifferent('lastName');
    }

    // If there are any attributes that are present in the userAttributes but missing or outdated in existingUser
    // then update the user in the system to set the correct attribute values
    if (!_.isEmpty(missingAttribs) || !_.isEmpty(updatedAttribs)) {
      const userService = await this.service('userService');
      const { uid, rev } = existingUser;
      try {
        await userService.updateUser(getSystemRequestContext(), {
          uid,
          rev,
          ...missingAttribs,
          ...updatedAttribs,
        });
      } catch (err) {
        this.log.error(err);
        throw this.boom.badRequest(`Error updating user: ${err.message}`, true);
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  async revokeToken(requestContext, { token }, providerConfig) {
    const tokenRevocationService = await this.service('tokenRevocationService');
    await tokenRevocationService.revoke(requestContext, { token });
  }
}

module.exports = ProviderService;
