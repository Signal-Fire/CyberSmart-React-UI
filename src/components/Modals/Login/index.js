/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Message, Grid, Form, Modal, Button } from 'semantic-ui-react';
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
                                    <Form size='large'>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Username'
                                            name='username'
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            error = {this.state.loginError}
                                        />
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            name='password'
                                            type='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            error = {this.state.loginError}
                                        />
                                        <Button positive icon ='home' labelPosition='right' content="Login" onClick={this.performLogin.bind(this)} />
                                    </Form>
                                    <Message hidden={!this.state.loginError} color='red'>
                                        There was an error logging you in, please check your login credentials!
                                    </Message>
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
