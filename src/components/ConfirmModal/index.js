/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

export default class ConfirmModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleButtonClick(e) {
        this.setState({
            isOpen : false
        });
        if (e.target.name === 'yes')
            this.props.updateUserInformation();        
    }

    handleOpen() {
        this.setState({
            isOpen : true
        });
    }

    render() {
        return (
            <Modal 
            trigger={<Button positive icon='checkmark' labelPosition='right' content="Save" onClick = {this.handleOpen} />} 
            basic 
            size='small'
            open={this.state.isOpen}
            onOpen={this.handleStateTransfer}>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </Modal.Content>
                <Modal.Actions>
                <Button basic color='red' inverted onClick = {this.handleButtonClick} name='no'>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick = {this.handleButtonClick} name ='yes'>
                    <Icon name='checkmark' /> Yes
                </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
