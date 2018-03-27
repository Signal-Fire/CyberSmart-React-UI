/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Button, Header, Form, Message } from 'semantic-ui-react';

//Configuration
import { USER_COOKIE_IDENTIFIER, API_USERS_URL } from '../../../config';

//Component Exports
import { MenuIcon } from '../../Exports';

//Modal Exports
import { SemanticModal, ConfirmModal } from '../';

import axios from 'axios';

export default class UserSettingsModal extends Component {
    constructor() {
        super();

        this.state = {
            firstName : "",
            lastName : "",
            username : "",
            password: "",
            loading : false,
            informationChanged : false,
            isOpen : false,
            confirmModalOpen : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
        this.updateUserInformation = this.updateUserInformation.bind(this);
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

    updateUserInformation() {
        this.setState({ 
          loading: true,
          confirmModalOpen : false
        });
        axios({ method: 'POST',
            url: API_USERS_URL + '/update',
            headers: {
              'Authorization' : localStorage.getItem(USER_COOKIE_IDENTIFIER)
            },
            data : {
              username : this.state.username,
              password : this.state.password,
              first_name : this.state.firstName,
              last_name : this.state.lastName
            }
        }).then(res => {
          this.setState({ loading: false, changed: true });
        }).catch(err => {
          this.setState({ loading: false });
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
        switch ( e.target.name) {
            case "firstName":
                return this.setState({ "firstName" : e.target.value });
            case "lastName":
                return this.setState({ "lastName" : e.target.value });
            case "password":
                return this.setState({ "password" : e.target.value });
            default: 
                return null;
        }
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
                open = { this.state.isOpen }
                onClose = { this.handleVisibility }
                size='small'
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
                                        name = 'firstName'
                                        value = {this.state.firstName}
                                        onChange = {this.handleChange}
                                    />
                                    <Form.Input
                                        label = 'Last Name'
                                        placeholder = 'Last Name'
                                        name = 'lastName'
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
                        onClick={this.handleVisibility}>
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
