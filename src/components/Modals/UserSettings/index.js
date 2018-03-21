/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Button, Header, Form, Message } from 'semantic-ui-react';

//Configuration
import { USER_COOKIE_IDENTIFIER, API_USERS_URL } from '../../../config';

//Component Exports
import { MenuIcon } from '../../Exports';

//Modal Exports
import { SemanticModal, ConfirmModal } from '../Exports';

import axios from 'axios';

export default class UserSettingsModal extends Component {
    constructor() {
        super();

        this.state = {
            firstName : "",
            lastName : "",
            username : "",
            loading : false,
            informationChanged : false,
            isOpen : false,
            confirmModalOpen : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
    }

    getUserInformation() {
        axios.get(API_USERS_URL + '/info', {
          headers: {
            'Authorization' : window.localStorage ? localStorage.getItem(USER_COOKIE_IDENTIFIER) : null
          }
        }).then(res => {
          this.setState({
            firstName : this.upperCase(res.data.first_name),
            lastName : this.upperCase(res.data.last_name),
            username : res.data.username
          });
        }).catch(err => {
          console.error(err);
        });
    }

    upperCase(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    handleVisibility() {
        this.setState({ isOpen : !this.state.isOpen });
    }

    handleChange(e) { 
        if (e.target.name !== "firstName" || 
            e.target.name !== "password" || 
            e.target.name !== "lastName")
            return false;

        var stateOption = e.target.name;
        this.setState({ stateOption : e.target.value });
      }

    render() {
        return (
            <SemanticModal 
                trigger = { 
                    <MenuIcon 
                        title = "User Settings" 
                        icon = "user" 
                        onClick = {this.handleVisibility} 
                        />
                }
                dimmer = { true }
                open = { this.state.isOpen }
                onClose = { this.handleVisibility }
                size='small'
                closeOnEscape={ true }
                closeOnRootNodeClick={ false }
            >
                <Modal.Header>User Settings</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Edit your User Settings</Header>
                            <Form loading = { this.state.loading }>
                                <Form.Group widths={2}>
                                    <Form.Input
                                        label = 'First Name'
                                        placeholder = 'First Name'
                                        name = 'firstname'
                                        value = {this.state.firstName}
                                        onChange = {this.handleChange}
                                    />
                                    <Form.Input
                                        label = 'Last Name'
                                        placeholder = 'Last Name'
                                        name = 'lastname'
                                        value = {this.state.lastName}
                                        onChange = {this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input
                                        label = 'Hub Username'
                                        placeholder = 'Hub Username'
                                        name = 'username'
                                        value = {this.state.username}
                                        readOnly
                                    />
                                    <Form.Input
                                        label='Hub Password'
                                        placeholder='Hub Password'
                                        name = 'password'
                                        type = 'password'
                                        value = {this.state.password}
                                        onChange = {this.handleChange} 
                                    />
                                </Form.Group>
                            </Form>
                            <Message
                                success
                                header='Success!'
                                content="User information changed!"
                                hidden={!this.state.informationChanged}
                            />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button
                        color='black' 
                        onClick={this.handleClick}>
                        Cancel
                    </Button>
                    <ConfirmModal 
                        updateUserInformation = {this.updateUserInformation} 
                        open = {this.state.confirmModalOpen}/>
                </Modal.Actions>
            </SemanticModal>
        )
    }
}
