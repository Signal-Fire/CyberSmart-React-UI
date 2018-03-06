/*jshint esversion: 6*/
import React, { Component } from 'react';

import { USER_COOKIE_IDENTIFIER, API_USERS_URL } from '../../config';

import { MenuIcon } from '../Exports';
import { Modal, Button, Header, Form } from 'semantic-ui-react';

import axios from 'axios';

export default class UserModal extends Component {
    constructor() {
        super();
        this.state = {
            firstName : "",
            lastName : "",
            hubUser : "",
            hubPass : "",
            isOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
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
          hubUser : res.data.username,
          hubPass : "*******"
        });
      }).catch(err => {
        console.error(err);
      });
    }
   
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    upperCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    componentDidMount() {
      this.getUserInformation();
    }

    render() {
      return (
        <Modal
          dimmer={true}
          open={this.state.isOpen}
          onClose={this.handleClick}
          size='small'
          closeOnEscape={true}
          closeOnRootNodeClick={false}
          trigger={<MenuIcon title = "User Settings" icon = "user" onClick={this.handleClick}/>}
        >
          <Modal.Header>User Settings</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Edit your User Settings from here</Header>
              <Form>
                    <Form.Group widths={2}>
                        <Form.Input label='First Name' placeholder='First Name' value = {this.state.firstName}/>
                        <Form.Input label='Last Name' placeholder='Last Name' value = {this.state.lastName} />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Hub Username' placeholder='Hub Username' value = {this.state.hubUser}/>             
                        <Form.Input label='Hub Password' placeholder='Hub Password' type = 'password' />
                    </Form.Group>                    
                </Form>
            </Modal.Description>
          </Modal.Content>          
          <Modal.Actions>
            <Button color='black' onClick={this.handleClick}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.handleClick} />
          </Modal.Actions>
        </Modal>
      )
    }
  }
