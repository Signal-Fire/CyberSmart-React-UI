/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Label, Icon, Form, Button } from 'semantic-ui-react';

import { API_LOCATION_URL, USER_COOKIE_IDENTIFIER } from '../../../config';

import axios from 'axios';

export default class AddLocationModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false,
            locationName : ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.addLocation = this.addLocation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
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
          <Modal
            dimmer={true}
            open={this.state.isOpen}
            onClose={this.handleClick}
            size='small'
            closeOnEscape={true}
            closeOnRootNodeClick={false}
            trigger = {<Label as ='a' onClick ={this.handleClick}> <Icon name='setting' /> Add Location </Label>}>
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
                    <Button color='black' onClick={this.handleClick}>
                    Cancel
                    </Button>
                    <Button positive icon='checkmark' labelPosition='right' content="Add" onClick={this.addLocation} name = 'add'/>
                </Modal.Actions>
            </Modal>
        )
    }
};
