/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Menu, Modal, Form, Button } from 'semantic-ui-react';

import { SemanticModal } from '../../';
import { API_LOCATION_URL, USER_COOKIE_IDENTIFIER } from '../../../../config';

import axios from 'axios';

export default class AddRoomModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false,
            locationName : ""
        };

        this.addLocation = this.addLocation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleVisibility() {
        this.setState(prevState => ({
            isOpen : !prevState.isOpen
        }));        
    }

    addLocation() {
        axios({ method: 'POST',
            url: API_LOCATION_URL +'/add',
            headers: {
                'Authorization' : localStorage.getItem(USER_COOKIE_IDENTIFIER)
            },
            data: {
                name : this.state.locationName
            }
        }).then(res => {
            this.handleClick();
        }).catch(err => {
            console.error(err);
        });
    }

    handleChange(e) {
        switch(e.target.name) {
            case 'locationName':
                this.setState({
                    locationName : e.target.value
                });
            break;
            default:
            break;
        }
    }

    render() {
        return (
          <SemanticModal
            open={this.state.isOpen}
            onClose={this.handleVisibility.bind(this)}
            size='small'
            trigger = {
                <Menu.Item icon = "plus" onClick = {this.handleVisibility.bind(this)}/>
                }>
                <Modal.Header>Add a Location</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths={2}>
                                <Form.Input 
                                    label = 'Location Name'
                                    placeholder = 'Location Name' 
                                    name = 'locationName' 
                                    value = {this.state.locationName}
                                    onChange = {this.handleChange}
                                    />                                
                            </Form.Group>                            
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.handleVisibility.bind(this)}>
                    Cancel
                    </Button>
                    <Button positive icon='checkmark' labelPosition='right' content="Add" onClick={this.addLocation} name = 'add'/>
                </Modal.Actions>
            </SemanticModal>
        )
    }
};
