/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Menu, Modal, Button } from 'semantic-ui-react';

import { AddLocationForm } from '../../../Forms';
import { SemanticModal } from '../../';


export default class AddRoomModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false,
            locationName : ""
        };

    }

    handleVisibility() {
        this.setState(prevState => ({
            isOpen : !prevState.isOpen
        }));        
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
                        <AddLocationForm />
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
