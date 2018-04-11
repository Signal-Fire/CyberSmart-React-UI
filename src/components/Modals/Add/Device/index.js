/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Menu } from 'semantic-ui-react';
import { AddDeviceForm } from '../../../Forms';
import { SemanticModal } from '../../';

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
                            <AddDeviceForm />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        
                    </Modal.Actions>
            </SemanticModal>
        )
    }
}
