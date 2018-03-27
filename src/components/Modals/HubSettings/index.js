/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal, Button, Header, Form, Grid } from 'semantic-ui-react';

import { CPUChart } from '../../Charts/Exports';
import { MenuIcon } from '../../Exports';
import { SemanticModal } from '../';

export default class HubSettingsModal extends Component {
    constructor() {
        super();
        this.state = { isOpen: false };      
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <SemanticModal
                trigger = { 
                    <MenuIcon 
                        title = "Hub Settings" 
                        icon = "settings" 
                        onClick = {this.handleVisibility} 
                        />
                }
                open = { this.state.isOpen }
                onClose = { this.handleVisibility }
                size='small'
            >

            <Modal.Header>Hub Settings</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>Edit your Hub Settings from here</Header>
                            <Form>
                                <Form.Group widths={2}>
                                    <Form.Input label='Hub IP Address' placeholder='Hub IP Address' readOnly value ='127.0.0.1'/>
                                </Form.Group>
                            </Form>
                        <Header>Hub Hardware Statistics</Header>
                            <Grid stackable columns={1}>            
                                <Grid.Column>
                                    <CPUChart />    
                                </Grid.Column>
                            </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive icon='close' labelPosition='right' content="Close" onClick={this.handleVisibility} />
                    </Modal.Actions>
            </SemanticModal>
        )
    }
}
