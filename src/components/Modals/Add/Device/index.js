/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Label, Form, Button } from 'semantic-ui-react';
import { API_LOCATION_URL, API_DEVICES_URL, USER_COOKIE_IDENTIFIER } from '../../../../config';
import { SemanticModal } from '../../';
import axios from 'axios';

export default class AddDeviceModal extends Component {
    constructor() {
        super();
        
        this.state = {
            isOpen : false,
            isLoading : true,
            isError : false,
            deviceName : "",
            deviceAddresses : [],
            selectedAddress,
            deviceLocations : [],
            selectedLocation
        };

        this.findConnectedDevices = this.findConnectedDevices.bind(this);
        this.findActiveLocations = this.findActiveLocations.bind(this);
    }

    handleTextChange(e) {
        switch(e.target.name) {
            case 'deviceName':
                return this.setState({ 'deviceName' : e.target.value });
        }
    }

    componentWillMount() {
        this.findConnectedDevices();
        this.findActiveLocations();
    }

    findConnectedDevices() {
        axios.get(API_DEVICES_URL + '/find/connected')
        .then(res => {
            this.setState({
                isLoading : false,
                deviceAddresses : this.createDeviceDropdown(res.data)
            });
        }).catch(err => {
            this.setState({
                isLoading : false,
                isError : true
            });
        });
    }

    findActiveLocations() {
        axios.get(API_LOCATION_URL + '/find/all')
        .then(res => {
            this.setState({
                isLoading : false,
                deviceLocations : this.createLocationDropdown(res.data)
            });
        }).catch(err => {
            this.setState({
                isLoading: false,
                isError : true
            });
        });
    }

    createDeviceDropdown(data) {        
        var newData = data.filter(x => x.ip !== undefined);
        return newData.forEach(item => {            
            item.key = item.mac;  
            item.text = "Plug: " + item.ip.replace("(", "").replace(")", "");
            item.value = item.ip.replace("(", "").replace(")", "");               
        });
    }

    createLocationDropdown(data) {         
        return data.forEach(item => {            
            item.key = item._id;  
            item.text = item.name;
            item.value = item._id;               
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
                isError : false
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
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        return (
            <SemanticModal
                open={this.state.isOpen}
                onClose={this.handleVisibility.bind(this)}
                size='small'
                trigger = {
                    <Label as ='a' onClick ={this.handleClick}> 
                    <Icon name='setting' /> Add Device </Label>
                    }
            >
                <Modal.Header>Add a Device</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form
                                loading = { this.state.isLoading }
                                error = { this.state.isError }
                                >
                                <Form.Group widths = {2}>
                                    <Form.Input
                                        fluid
                                        label = 'Device Name'
                                        placeholder = 'Device Name'
                                        name = 'deviceName'
                                        value = {this.state.deviceName}
                                        onChange = {this.handleTextChange.bind(this)}
                                    />
                                    <Form.Select
                                        fluid
                                        label = 'Physical Device'
                                        options = { this.state.physicalDevices }
                                        onChange = { this.selectPhysicalDevice.bind(this) }
                                        placeholder = 'Physical Devices'
                                    />
                                </Form.Group>
                                <Form.Group widths = {2}>
                                    <Form.Select 
                                        fluid
                                        label = 'Device Location'    
                                        options = { this.state.deviceLocations }
                                        onChange = {this.selectLocation.bind(this) }
                                        placeholder = 'Device Location'
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            color = 'black' 
                            onClick = {this.handleVisibility.bind(this)}>
                            Cancel
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content="Add" onClick={this.addDevice.bind(this)} name = 'add'/>
                    </Modal.Actions>
            </SemanticModal>
        )
    }
}
