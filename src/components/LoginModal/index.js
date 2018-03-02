/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Modal, Button, Header, Form } from 'semantic-ui-react';

export default class LoginModal extends Component {
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
          open={this.props.open}
          onClose={this.handleClick}
          size='small'
          closeOnEscape={false}
          closeOnRootNodeClick={false}
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Login</Header>
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
