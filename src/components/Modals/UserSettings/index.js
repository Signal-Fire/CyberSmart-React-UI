/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import { MenuIcon } from '../../Exports';
import { UserSettingsForm } from '../../Forms';

//Modal Exports
import { SemanticModal } from '../';

export default class UserSettingsModal extends Component {
    constructor() {
        super();

        this.state = {      
            isOpen : false,
            confirmModalOpen : false
        };

        this.handleVisibility = this.handleVisibility.bind(this);
    }

    upperCase(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    handleVisibility() {
        this.setState({ isOpen : !this.state.isOpen });
    }

    render() {
        return (
            <SemanticModal 
                trigger = { 
                    <MenuIcon 
                        title = "User Settings" 
                        icon = "user" 
                        onClick = {this.handleVisibility} 
                        />
                }
                open = { this.state.isOpen }
                onClose = { this.handleVisibility }
                size='small'
            >
                <Modal.Header>Edit your User Settings</Modal.Header>
                    <Modal.Content>                       
                        <UserSettingsForm />
                    </Modal.Content>
                    <Modal.Actions>                                      
                </Modal.Actions>
            </SemanticModal>
        )
    }
}
