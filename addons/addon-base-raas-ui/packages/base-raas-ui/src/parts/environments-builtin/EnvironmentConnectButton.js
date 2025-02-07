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

import React from 'react';
import { observer, inject } from 'mobx-react';
import { action, computed, decorate } from 'mobx';

class EnvironmentConnectButton extends React.Component {
  getUrl = async environment => {
    const { AuthorizedUrl } = await environment.getEnvironmentUrl(this.user);
    return AuthorizedUrl;
  };

  handleConnectClick = async event => {
    event.preventDefault();
    event.stopPropagation();

    const environment = this.props.environment;

    const url = await this.getUrl(environment);

    window.open(url, '_blank', 'noopener,noreferrer');

    environment.setFetchingUrl(false);
  };

  render() {
    const { as: As, userStore, user, environment, ...props } = this.props;
    return <As onClick={this.handleConnectClick} {...props} />;
  }

  get user() {
    return this.props.user || this.props.userStore.user;
  }
}
// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(EnvironmentConnectButton, {
  user: computed,
  handleConnectClick: action,
  getUrl: action,
});

export default inject('userStore')(observer(EnvironmentConnectButton));
