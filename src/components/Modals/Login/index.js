/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Message, Grid, Modal } from 'semantic-ui-react';
import { LoginForm } from '../../Forms';
import { USER_COOKIE_IDENTIFIER, API_USERS_URL } from '../../../config';
import { SemanticModal } from '../';
import axios from 'axios';

export default class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            isOpen : window.localStorage ? localStorage.getItem(USER_COOKIE_IDENTIFIER) === null : true,
            username : "",
            password: "",
            loginError: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        switch (e.target.name) {
            case "username":
                return this.setState({ "username" : e.target.value });
            case "password":
                return this.setState({ "password" : e.target.value });
            default:
                return null;
        }     
    }

    handleVisibility() { 
        this.setState({ isOpen : !this.state.isOpen });
    }

    performLogin() {
        axios.post(API_USERS_URL + '/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
                if (res.status === 200) {
                    localStorage.setItem(USER_COOKIE_IDENTIFIER, res.data.token);
                    this.handleClose();
                } else {
                    this.setState({loginError: true});
                }
            }).catch(err => {
                this.setState({ loginError: true });
            });
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
