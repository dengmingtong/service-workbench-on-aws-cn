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

import _ from 'lodash';
import React from 'react';
import { inject, Observer, observer } from 'mobx-react';
import { action, computed, decorate, observable, runInAction } from 'mobx';
import { Header, Icon, Step, Tab } from 'semantic-ui-react';

import Stores from '@amzn/base-ui/dist/models/Stores';
import { swallowError } from '@amzn/base-ui/dist/helpers/utils';
import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';
import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import { isStoreLoading, isStoreReady } from '@amzn/base-ui/dist/models/BaseStore';

import { createForm } from '@amzn/base-ui/dist/helpers/form';
import { createWizard } from '@amzn/base-ui/dist/models/Wizard';
import { displayError, displaySuccess } from '@amzn/base-ui/dist/helpers/notification';
import { sessionStore } from '@amzn/base-ui/dist/models/SessionStore';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { getEnvTypeConfigFormFields } from '../../../models/forms/EnvTypeConfigForm';
import BasicInfoStep from './env-type-config-steps/BasicInfoStep';
import AccessControlStep from './env-type-config-steps/AccessControlStep';
import InputParamsStep from './env-type-config-steps/InputParamsStep';
import TagsStep from './env-type-config-steps/TagsStep';

i18next.use(initReactI18next);

const steps = [
  {
    key: 'basic_information',
    title: 'workspaceConf.basicInformation.title',
    desc: 'workspaceConf.basicInformation.desc',
    isComplete: false,
    stepComponent: BasicInfoStep,
  },
  {
    key: 'access_control',
    title: 'workspaceConf.accessControl.title',
    desc: 'workspaceConf.accessControl.desc',
    isComplete: false,
    stepComponent: AccessControlStep,
  },
  {
    key: 'input_params',
    title: 'workspaceConf.inputParams.title',
    desc: 'workspaceConf.inputParams.desc',
    isComplete: false,
    stepComponent: InputParamsStep,
  },
  {
    key: 'tags',
    title: 'workspaceConf.tags.title',
    desc: 'workspaceConf.tags.desc',
    isComplete: false,
    stepComponent: TagsStep,
  },
];
const wizardTempStoreKeyPrefix = 'EnvTypeConfigEditor-TempStore';

function clearState() {
  sessionStore.removeStartsWith(wizardTempStoreKeyPrefix);
}

class EnvTypeConfigEditor extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.stores = new Stores([this.envTypeConfigsStore, this.userRolesStore]);
      this.form = createForm(getEnvTypeConfigFormFields(props.envTypeConfig));
      this.wizardModel = createWizard(_.map(steps, s => _.omit(s, 'stepComponent')));
    });
  }

  componentDidMount() {
    swallowError(this.stores.load());
  }

  render() {
    const stores = this.stores;
    let content = null;
    if (stores.hasError) {
      content = <ErrorBox error={stores.error} className="p0 mb3" />;
    } else if (isStoreLoading(stores)) {
      content = <BasicProgressPlaceholder />;
    } else if (isStoreReady(stores)) {
      content = this.renderContent();
    } else {
      content = null;
    }

    return (
      <div className="ml3 mt3 mr3 mb4">
        {this.renderTitle()}
        {content}
      </div>
    );
  }

  renderTitle = () => {
    const envTypConfig = this.envTypeConfig;
    const isUpdating = this.isEditAction();
    return (
      <div className="mb3">
        <Header as="h3" className="color-grey mt1 mb0">
          <Icon name="settings" className="align-top" />
          <Header.Content className="left-align">
            {isUpdating
              ? i18next.t('workspaceConf.edit', { ns: 'types' })
              : i18next.t('workspaceConf.add', { ns: 'types' })}
          </Header.Content>
          {isUpdating && <Header.Subheader className="mt2">{envTypConfig.name}</Header.Subheader>}
        </Header>
      </div>
    );
  };

  renderContent = () => {
    const isUpdating = this.isEditAction();
    return (
      // Render as tabs when updating configuration,
      // Render as wizard when adding configuration
      <>
        {isUpdating ? (
          this.renderStepTabs()
        ) : (
          <>
            {this.renderStepProgress()}
            {this.renderCurrentStep()}
          </>
        )}
      </>
    );
  };

  renderStepTabs = () => {
    const stepPanes = _.map(this.wizardModel.steps, step => ({
      menuItem: i18next.t(step.title, { ns: 'types' }),
      render: () => <Observer>{() => this.renderEnvTypeConfigStep(step.key)}</Observer>,
    }));
    return <Tab className="mt3" menu={{ secondary: true, pointing: true }} renderActiveOnly panes={stepPanes} />;
  };

  renderStepProgress = () => {
    return (
      <Step.Group ordered className="container">
        {_.map(this.wizardModel.steps, step => {
          const stepAttribs = {
            key: step.key,
            completed: step.isComplete,
            active: this.wizardModel.isStepActive(step.key),
          };
          return (
            <Step {...stepAttribs}>
              <Step.Content>
                <Step.Title>{i18next.t(step.title, { ns: 'types' })}</Step.Title>
                <Step.Description>{i18next.t(step.desc, { ns: 'types' })}</Step.Description>
              </Step.Content>
            </Step>
          );
        })}
      </Step.Group>
    );
  };

  renderCurrentStep = () => {
    return this.renderEnvTypeConfigStep(this.wizardModel.currentStep.key);
  };

  renderEnvTypeConfigStep(stepKey) {
    const step = _.find(steps, { key: stepKey });
    const StepComponentClass = _.get(step, 'stepComponent');
    return (
      <StepComponentClass
        form={this.form}
        wizardModel={this.wizardModel}
        onCancel={() => {
          clearState();
          this.props.onCancel();
        }}
        onSubmit={this.handleFormSubmission}
        envTypeConfig={this.envTypeConfig}
        envType={this.envType}
        envTypeConfigsStore={this.envTypeConfigsStore}
        onPrevious={this.handlePreviousClick}
        // steps can store temporary information in session store with the following key prefix
        // see InputParamsStep as an example, it needs to create a different mobx form specifically for cfn params
        // the values entered for that form will wipe out on next/previous click as the component gets unmounted/mounted
        // to preserve those values outside of the step component the step component can save the info in session store
        // with this key prefix
        // This component (i.e., EnvTypeConfigEditor) will take care of clearing session keys with this prefix upon
        // completion or cancel
        wizardTempStoreKeyPrefix={wizardTempStoreKeyPrefix}
        action={this.getAction()}
      />
    );
  }

  handlePreviousClick = () => {
    this.wizardModel.previous();
  };

  handleFormSubmission = async form => {
    const existingEnvTypeConfig = this.envTypeConfig;
    const isUpdating = this.isEditAction();

    const {
      id,
      name,
      desc,
      estimatedCostInfo,
      allowRoleIds,
      denyRoleIds,
      params: paramsJsonStr,
      tags: tagsJsonStr,
    } = form.values();

    let existingParams;
    let existingTags;
    if (isUpdating) {
      existingParams = existingEnvTypeConfig.params;
      existingTags = existingEnvTypeConfig.tags;
    }

    // The params and tags fields are submitted as JSON string via the form
    const params = !_.isEmpty(paramsJsonStr) ? JSON.parse(paramsJsonStr) : existingParams;

    // The updatedTags below has [{name,value}] form. Translate it to [{key,value}]
    const updatedTags = JSON.parse(tagsJsonStr || '[]') || [];
    const fromNameValueToKeyValue = nameValue => ({ key: nameValue.key || nameValue.name, value: nameValue.value });
    const tags = !_.isEmpty(tagsJsonStr) ? _.map(updatedTags, fromNameValueToKeyValue) : existingTags;

    const envTypeConfig = {
      ...(existingEnvTypeConfig || {}),
      id,
      name,
      desc,
      estimatedCostInfo,
      allowRoleIds: allowRoleIds || [],
      denyRoleIds: denyRoleIds || [],
      params,
      tags,
    };

    try {
      if (!isUpdating && this.wizardModel.hasNext) {
        // When creating configuration, do not submit to server just yet,
        // show next screen if there is one
        // Will submit to server at the end
        return this.wizardModel.next();
      }

      let savedEnvTypeConfig;
      if (isUpdating) {
        savedEnvTypeConfig = await this.envTypeConfigsStore.updateEnvTypeConfig(envTypeConfig);
        displaySuccess(
          i18next.t('workspaceConf.updated', { ns: 'types', name: envTypeConfig.name }),
          i18next.t('success'),
        );
      } else {
        savedEnvTypeConfig = await this.envTypeConfigsStore.createEnvTypeConfig(envTypeConfig);
      }
      clearState();

      this.props.onEnvTypeConfigSaveComplete(savedEnvTypeConfig);
      return savedEnvTypeConfig;
    } catch (error) {
      displayError(error);
    }
    return undefined;
  };

  get envTypeConfigsStore() {
    return this.props.envTypeConfigsStore;
  }

  get userRolesStore() {
    return this.props.userRolesStore;
  }

  get envType() {
    return this.props.envType;
  }

  get envTypeConfig() {
    return this.props.envTypeConfig;
  }

  isEditAction() {
    return this.getAction() === 'edit';
  }

  getAction() {
    return this.props.action;
  }
}

decorate(EnvTypeConfigEditor, {
  userRolesStore: computed,
  envTypeConfigsStore: computed,
  envTypeConfig: computed,
  envType: computed,

  handleFormSubmission: action,

  stores: observable,
});
export default withTranslation()(inject('userRolesStore')(observer(EnvTypeConfigEditor)));
