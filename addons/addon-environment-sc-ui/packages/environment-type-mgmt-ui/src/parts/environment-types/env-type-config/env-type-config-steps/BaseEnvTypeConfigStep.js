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
import { runInAction } from 'mobx';
import { Button, Segment } from 'semantic-ui-react';

import Form from '@amzn/base-ui/dist/parts/helpers/fields/Form';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next);

class BaseEnvTypeConfigStep extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.form = props.form;
      this.wizard = props.wizard;
    });
  }

  render() {
    const form = this.props.form;
    return (
      <Segment clearing className="mt3 p3">
        <Form form={form} onCancel={this.props.onCancel} onSuccess={this.props.onSubmit}>
          {({ processing, onCancel }) => (
            <>
              {this.renderFormFields({ form, processing, onCancel })}
              {this.renderActionButtons({ processing, onCancel })}
            </>
          )}
        </Form>
      </Segment>
    );
  }

  renderActionButtons({ processing, onCancel }) {
    const isUpdating = this.isEditAction();
    const submitButtonTitle = isUpdating
      ? i18next.t('save')
      : this.props.wizardModel.hasNext
      ? i18next.t('next')
      : i18next.t('add');
    return (
      <div>
        <Button
          className="ml2 mb2"
          primary
          content={submitButtonTitle}
          disabled={processing}
          type="submit"
          floated="right"
        />
        {!isUpdating && this.props.wizardModel.hasPrevious && (
          <Button
            className="ml2 mb2"
            primary
            content={i18next.t('previous')}
            disabled={processing}
            floated="right"
            onClick={this.props.onPrevious}
          />
        )}
        <Button data-testid="cancel-button" basic color="grey" disabled={processing} onClick={onCancel} floated="left">
          {i18next.t('cancel')}
        </Button>
      </div>
    );
  }

  isEditAction() {
    return this.getAction() === 'edit';
  }

  getAction() {
    return this.props.action;
  }

  getEnvTypeConfig() {
    return this.props.envTypeConfig;
  }
}
export default BaseEnvTypeConfigStep;
