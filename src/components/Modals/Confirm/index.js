/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Button, Header, Icon } from 'semantic-ui-react';

import { SemanticModal } from '../Template';

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
          <SemanticModal
            trigger={
                <Button
                    positive 
                    icon='checkmark' 
                    labelPosition='right' 
                    content="Save" 
                    onClick = {this.handleOpen} 
                    />
            } 
            basic 
            size='small'
            open={this.state.isOpen}
            onOpen={this.handleStateTransfer}>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                <p>Are you sure you wish to make these changes?</p>
                </Modal.Content>
                <Modal.Actions>
                <Button basic color='red' inverted onClick = {this.handleButtonClick} name='no'>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick = {this.handleButtonClick} name ='yes'>
                    <Icon name='checkmark' /> Yes
                </Button>
                </Modal.Actions>
            </SemanticModal>
        )
    }
}
