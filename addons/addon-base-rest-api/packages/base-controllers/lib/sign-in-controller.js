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

const querystring = require('querystring');
const _ = require('lodash');
const axios = require('axios').default;
const authProviderConstants = require('@amzn/base-api-services/lib/authentication-providers/constants')
  .authenticationProviders;

async function configure(context) {
  const router = context.router();
  const wrap = context.wrap;
  const boom = context.boom;

  const authenticationProviderConfigService = await context.service('authenticationProviderConfigService');
  // ===============================================================
  //  POST / (mounted to /api/authentication/id-tokens)
  // ===============================================================
  router.post(
    '/',
    wrap(async (req, res) => {
      const { code, pkce, mainUrl, authProviderId } = req.body;

      
      const authProviderConfig = await authenticationProviderConfigService.getAuthenticationProviderConfig(authProviderId);
      // const cognitoAuthConfig = _.find(providers, provider => {
      //   return provider.config.type.type === 'cognito_user_pool';
      // });
      if (!authProviderConfig) {
        throw boom.badRequest('Internal error while get id token', true);
      }
      console.log('api/authentication/id-tokens mingtong step 1, provider', authProviderConfig);      

      const params = {
        code,
        grant_type: 'authorization_code',
        client_id: authProviderConfig.config.clientId,
        redirect_uri: mainUrl,
        code_verifier: pkce,
      };

      const authCodeTokenExchangeUri = authProviderConfig.config.authCodeTokenExchangeUri;

      // Make a POST request to exchange code for token
      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

      try {
        const axiosClient = axios.create({
          baseURL: authCodeTokenExchangeUri,
          headers,
        });
        console.log('api/authentication/id-tokens mingtong step 2, axiosClient', axiosClient);
        console.log('api/authentication/id-tokens mingtong step 3, params', params);
        console.log('api/authentication/id-tokens mingtong step 3-1, type', authProviderConfig.config.type.type);
        let response;
        let id_token;
        if (authProviderConfig.config.type.type === authProviderConstants.keycloakAuthProviderTypeId) {
          response = await axiosClient.post(authCodeTokenExchangeUri, querystring.stringify(params));
          id_token =  _.get(response, 'data.access_token');
        } else {
          response = await axiosClient.post(authCodeTokenExchangeUri, params, { params });
          id_token =  _.get(response, 'data.id_token');
        }
        console.log('api/authentication/id-tokens mingtong step 4, response', response);
        console.log('api/authentication/id-tokens mingtong step 4, id_token', id_token);
        res.status(200).json({ token: id_token });
      } catch (e) {
        console.log('api/authentication/id-tokens mingtong step 4, error', e);
        throw boom.badRequest(`Error received while  call: ${e}`, true);
      }
    }),
  );

  return router;
}

module.exports = configure;