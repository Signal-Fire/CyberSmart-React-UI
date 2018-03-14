/*jshint esversion: 6*/
import React, { Component } from 'react';

import { USER_COOKIE_IDENTIFIER, API_USERS_URL } from '../../config';

import { MenuIcon, ConfirmModal } from '../Exports';
import { Modal, Button, Header, Form, Message } from 'semantic-ui-react';

import axios from 'axios';

export default class UserModal extends Component {
    constructor() {
        super();

        this.state = {
            firstName : "",
            lastName : "",
            username : "",
            password : "",
            loading: false,
            changed: false,
            isOpen: false,
            confirmModalOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
        this.updateUserInformation = this.updateUserInformation.bind(this);
    }

    getUserInformation() {
      axios.get(API_USERS_URL + '/info', {
        headers: {
          'Authorization' : localStorage.getItem(USER_COOKIE_IDENTIFIER)
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

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            changed: false
        });
    }

    handleChange(e) {
      switch(e.target.name) {
        case 'username':
          this.setState({ username : e.target.value });
          break;
        case 'firstname':
          this.setState({ firstName : e.target.value });
          break;
        case 'lastname':
          this.setState({ lastName : e.target.value });
          break;
        case 'password':
          this.setState({ password : e.target.value });
        break;
        default:
          break;
      }
    }

    upperCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    render() {
      const inlineStyle = {
          modal : {
              marginTop: '0px !important',
              marginLeft: 'auto',
              marginRight: 'auto'
          }
      };
      return (
        <Modal
          style = {inlineStyle.modal}
          dimmer={true}
          open={this.state.isOpen}
          onClose={this.handleClick}
          onOpen={this.getUserInformation}
          size='small'
          closeOnEscape={true}
          closeOnRootNodeClick={false}
          trigger={<MenuIcon title = "User Settings" icon = "user" onClick={this.handleClick}/>}
        >
          <Modal.Header>User Settings</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Edit your User Settings from here</Header>
              <Form loading = {this.state.loading}>
                    <Form.Group widths={2}>
                        <Form.Input
                          label = 'First Name'
                          placeholder = 'First Name'
                          name = 'firstname'
                          value = {this.state.firstName}
                          onChange = {this.handleChange}/>
                        <Form.Input
                          label = 'Last Name'
                          placeholder = 'Last Name'
                          name = 'lastname'
                          value = {this.state.lastName}
                          onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                          label = 'Hub Username'
                          placeholder = 'Hub Username'
                          name = 'username'
                          value = {this.state.username}
                          readOnly/>
                        <Form.Input
                          label='Hub Password'
                          placeholder='Hub Password'
                          name = 'password'
                          type = 'password'
                          value = {this.state.password}
                          onChange = {this.handleChange} />
                    </Form.Group>
                </Form>
                <Message
                    success
                    header='Success!'
                    content="User information changed!"
                    hidden={!this.state.changed}
                  />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.handleClick}>
              Cancel
            </Button>
            <ConfirmModal updateUserInformation = {this.updateUserInformation} open = {this.state.confirmModalOpen}/>
          </Modal.Actions>
        </Modal>
      )
    }
  }
