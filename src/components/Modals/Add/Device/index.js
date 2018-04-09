/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Form, Button, Menu } from 'semantic-ui-react';
import { API_LOCATION_URL, API_DEVICES_URL, USER_COOKIE_IDENTIFIER } from '../../../../config';
import { SemanticModal } from '../../';
import axios from 'axios';

export default class AddDeviceModal extends Component {
    constructor() {
        super();
        
        this.state = {
            isOpen : false,
            isLoading : false,
            connectedLoading : true,
            connectedError : false,
            locationsLoading : true,
            locationsError : false,
            isSuccess : false,
            isError : false,
            deviceName : "",
            physicalDevices : [],
            selectedAddress : "",
            deviceLocations : [],
            selectedLocation : ""
        };

        this.findActiveLocations = this.findActiveLocations.bind(this);
    }
    
    findActiveLocations() {
        axios.get(API_LOCATION_URL + '/find/all')
        .then(res => {
            this.setState({
                locationsLoading : false,
                deviceLocations : this.createLocationDropdown(res.data),
                locationsError : false
            });
        }).catch(err => {
            this.setState({
                locationsLoading: true,
                locationsError : true
            });
        });
    }

    addDevice() {
        this.setState({ isLoading : true });
        axios({ 
            method: 'POST',
            url : API_DEVICES_URL + '/add',
            headers: {
                'Authorization' : window.localStorage ? localStorage.getItem(USER_COOKIE_IDENTIFIER) : null
            },
            data: {
                name : this.state.deviceName,
                address : this.state.selectedAddress,
                location : this.state.selectedLocation
            }
        }).then(res => {
            this.setState({ 
                isLoading : false,
                isError : false,
                isSuccess : true
            });
            this.forceUpdate();
            this.handleClick();
        }).catch(err => {
            this.setState({ 
                isLoading : false,
                isError : true
             });
        });
    }

    handleVisibility() {     
        this.setState(prevState => ({ isOpen : !prevState.isOpen }));
    }

    render() {
        return (
            <SemanticModal
                open={this.state.isOpen}
                onOpen = {this.handleVisibility.bind(this)}
                onClose={this.handleVisibility.bind(this)}
                success={this.state.isSuccess}
                size='small'
                trigger = { <Menu.Item icon = "plus" onClick = { this.handleClick } /> }
            >
                <Modal.Header>Add a Device</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            color = 'black' 
                            onClick = {this.handleVisibility.bind(this)}>
                            Cancel
                        </Button>
                        <Button 
                            positive 
                            icon='checkmark' 
                            labelPosition='right' 
                            content="Add" 
                            onClick={this.addDevice.bind(this)} 
                            name = 'add'/>
                    </Modal.Actions>
            </SemanticModal>
        )
    }
}
