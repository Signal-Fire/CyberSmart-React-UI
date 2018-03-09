/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Label, Icon, Form, Button } from 'semantic-ui-react';

import { API_DEVICES_URL, USER_COOKIE_IDENTIFIER } from '../../../config';

import axios from 'axios';

export default class AddDeviceModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false,
            deviceName : "",
            deviceAddress : "",
            deviceLocation : ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.addDevice = this.addDevice.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isOpen : !prevState.isOpen
        }));        
    }

    addDevice() {
        axios({ method: 'POST',
            url: API_DEVICES_URL +'/add',
            headers: {
                'Authorization' : localStorage.getItem(USER_COOKIE_IDENTIFIER)
            },
            data: {
                name : this.state.deviceName,
                address : this.state.deviceAddress,
                location : this.state.deviceLocation
            }
        }).then(res => {
            this.handleClick();
        }).catch(err => {
            console.error(err);
        });
    }

    handleChange(e) {
        switch(e.target.name) {
            case 'deviceName':
                this.setState({
                    deviceName : e.target.value
                });
            break;
            case 'deviceAddress':
                this.setState({
                    deviceAddress : e.target.value
                });
            break;
            case 'deviceLocation':
                this.setState({
                    deviceLocation : e.target.value
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
            trigger = {<Label as ='a' onClick ={this.handleClick}> <Icon name='setting' /> Add Device </Label>}>
                <Modal.Header>Add a Device</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths={2}>
                                <Form.Input 
                                    label = 'Device Name'
                                    placeholder = 'Device Name' 
                                    name = 'deviceName' 
                                    value = {this.state.deviceName}
                                    onChange = {this.handleChange}
                                    />
                                <Form.Input 
                                    label = 'Device Address'
                                    placeholder = 'Device Address'
                                    name = 'deviceAddress'
                                    value = {this.state.deviceAddress}
                                    onChange = {this.handleChange}
                                    />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input 
                                    label = 'Device Location' 
                                    placeholder = 'Device Location'
                                    name = 'deviceLocation'
                                    value = {this.state.deviceLocation}
                                    onChange = {this.handleChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.handleClick}>
                    Cancel
                    </Button>
                    <Button positive icon='checkmark' labelPosition='right' content="Add" onClick={this.addDevice} name = 'add'/>
                </Modal.Actions>
            </Modal>
        )
    }
};
