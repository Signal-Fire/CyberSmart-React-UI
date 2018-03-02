/*jshint esversion: 6*/
import React, { Component } from 'react';

import { MenuIcon } from '../Exports';
import { Modal, Button, Header, Form } from 'semantic-ui-react';

export default class UserModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                        <Form.Input label='Contact Email' placeholder='Contact Email' />             
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='First Name' placeholder='First Name' />
                        <Form.Input label='Last Name' placeholder='Last Name' />
                    </Form.Group>
                </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      )
    }
  }
