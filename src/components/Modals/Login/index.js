/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Message, Grid, Modal } from 'semantic-ui-react';
import { LoginForm } from '../../Forms';
import { USER_COOKIE_IDENTIFIER } from '../../../config';
import { SemanticModal } from '../';

export default class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            isOpen : window.localStorage ? localStorage.getItem(USER_COOKIE_IDENTIFIER) === null : true            
        };
    }

    handleVisibility() { 
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        return (
            <SemanticModal
                open={this.state.isOpen}
                onClose={this.handleVisibility}
                size='small'
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
                                <Grid.Column style={{ maxWidth: 450 }}>
                                    <Message compact>
                                        Please login! <br />
                                        Just enter your hub login details to get started!
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{ maxWidth: 450 }}>
                                   <LoginForm />      
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions></Modal.Actions>
            </SemanticModal>
        )
    }
}
