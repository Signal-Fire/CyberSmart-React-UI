/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Modal, Button, Header, Form, Grid, Image, Segment, Message } from 'semantic-ui-react';

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
          <Modal.Header></Modal.Header>
          <Modal.Content>
            <Modal.Description>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                    >
                    <Grid.Row>
                        <Grid.Column>
                            <Message compact>
                                It looks like you're not logged in! 
                                Just enter your hub login details to get started!
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form size='large'>
                                    <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    />
                                    <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    />
                                    <Button positive icon ='home' labelPosition='right' content="Login" onClick={this.close} />                                        
                            </Form>
                        </Grid.Column> 
                    </Grid.Row>
                </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )
    }
  }
