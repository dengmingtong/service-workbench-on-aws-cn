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
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Card, Divider, Header, Icon, Modal } from 'semantic-ui-react';
import { action, computed, decorate, observable, runInAction } from 'mobx';

import { displayError } from '@amzn/base-ui/dist/helpers/notification';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import EnvTypeConfigEditor from './EnvTypeConfigEditor';

i18next.use(initReactI18next);
class EnvTypeConfigCard extends Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.processing = false;
      this.shouldShowDeleteDialog = false;
      this.shouldShowEditorDialog = false;
      this.cloning = false;
    });
  }

  render() {
    const envTypeConfig = this.props.envTypeConfig;
    return (
      <Card key={`etConfig-${envTypeConfig.id}`} raised className="mb3">
        <Card.Content>
          <Header as="h4">{envTypeConfig.name}</Header>
          <Card.Meta className="flex">
            <span className="flex-auto">{_.get(envTypeConfig, 'id')}</span>
            <Button
              basic
              color="grey"
              onClick={() => this.showCloneDialog()}
              floated="right"
              size="mini"
              disabled={this.processing}
            >
              {i18next.t('clone')}
            </Button>
          </Card.Meta>
          <Divider />
          <Card.Description>
            <div className="mb3 pr1 pl1 pb1">
              {/* Yes, we are doing dangerouslySetInnerHTML, the content was already sanitized by showdownjs */}
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: envTypeConfig.descHtml }} />
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color="blue"
            onClick={() => this.showEditorDialog()}
            floated="right"
            size="mini"
            disabled={this.processing}
          >
            {i18next.t('edit')}
          </Button>
          <Button
            basic
            color="red"
            onClick={() => this.showDeleteDialog()}
            floated="right"
            size="mini"
            disabled={this.processing}
          >
            {i18next.t('delete')}
          </Button>
          {this.renderDeleteConfirmation(envTypeConfig)}
          {this.renderEditorPopup(envTypeConfig)}
        </Card.Content>
      </Card>
    );
  }

  renderEditorPopup(envTypeConfig) {
    const shouldShowEditorDialog = this.shouldShowEditorDialog;
    const mode = this.cloning ? 'clone' : 'edit';
    const envTypeConfigForEditor = this.cloning
      ? { ...envTypeConfig, id: `${envTypeConfig.id}-copy`, name: `${envTypeConfig.name}-copy` }
      : envTypeConfig;
    return (
      <Modal
        closeIcon
        open={shouldShowEditorDialog}
        onClose={this.hideEditorDialog}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size="large"
      >
        <EnvTypeConfigEditor
          onCancel={this.hideEditorDialog}
          envTypeConfig={envTypeConfigForEditor}
          envType={this.props.envType}
          envTypeConfigsStore={this.envTypeConfigsStore}
          onEnvTypeConfigSaveComplete={this.hideEditorDialog}
          action={mode}
        />
      </Modal>
    );
  }

  renderDeleteConfirmation(envTypeConfig) {
    const shouldShowDeleteDialog = this.shouldShowDeleteDialog;
    const processing = this.processing;
    return (
      <Modal open={shouldShowDeleteDialog} onClose={this.hideDeleteDialog} closeOnDimmerClick={!processing}>
        <Modal.Header>
          {i18next.t('workspaceConf.delete.header', { ns: 'types' })}: <strong>{envTypeConfig.name}</strong>
        </Modal.Header>
        <Modal.Content>
          <p>{i18next.t('workspaceConf.delete.p1', { ns: 'types', name: envTypeConfig.name })}</p>
          <p>{i18next.t('workspaceConf.delete.p2', { ns: 'types' })}</p>
          <p>{i18next.t('workspaceConf.delete.p3', { ns: 'types' })}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            icon
            color="grey"
            labelPosition="right"
            size="mini"
            disabled={this.processing}
            onClick={this.hideDeleteDialog}
          >
            <Icon name="close" />
            {i18next.t('cancel')}
          </Button>
          <Button
            basic
            icon
            color="red"
            labelPosition="right"
            size="mini"
            disabled={this.processing}
            onClick={() => this.handleDeleteClick(envTypeConfig.id)}
          >
            <Icon name="trash" /> {i18next.t('delete')}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  showDeleteDialog = () => {
    this.shouldShowDeleteDialog = true;
    this.processing = false;
  };

  hideDeleteDialog = () => {
    if (this.processing) return;
    this.shouldShowDeleteDialog = false;
  };

  showCloneDialog = () => {
    this.cloning = true;
    this.showEditorDialog();
  };

  showEditorDialog = () => {
    this.shouldShowEditorDialog = true;
    this.processing = false;
  };

  hideEditorDialog = () => {
    if (this.processing) return;
    this.shouldShowEditorDialog = false;
    this.cloning = false;
  };

  handleDeleteClick = async id => {
    this.processing = true;
    const store = this.envTypeConfigsStore;
    try {
      await store.deleteEnvTypeConfig(id);
    } catch (error) {
      displayError(error);
    }
    runInAction(() => {
      this.processing = false;
      this.hideDeleteDialog();
    });
  };

  get envTypeConfigsStore() {
    return this.props.envTypeConfigsStore;
  }
}

decorate(EnvTypeConfigCard, {
  processing: observable,
  envTypeConfigsStore: computed,

  shouldShowDeleteDialog: observable,
  shouldShowEditorDialog: observable,
  cloning: observable,

  handleDeleteClick: action,

  showDeleteDialog: action,
  hideDeleteDialog: action,

  showCloneDialog: action,

  showEditorDialog: action,
  hideEditorDialog: action,
});
export default withTranslation()(withRouter(observer(EnvTypeConfigCard)));
