/*jshint esversion: 6*/
import React, { Component } from 'react';

import { CPUChart } from '../Charts/Exports';

import { MenuIcon } from '../Exports';
import { Modal, Button, Header, Form, Grid } from 'semantic-ui-react';

export default class HubModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
          trigger={<MenuIcon title = "Hub Settings" icon = "settings" onClick={this.handleClick}/>}
        >
          <Modal.Header>Hub Settings</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Edit your Hub Settings from here</Header>
              <Form>
                    <Form.Group widths={2}>
                        <Form.Input label='Hub Login' placeholder='Hub Login Username' value = 'admin'/>
                        <Form.Input label='Hub Password' placeholder='Hub Password' type='password' value='password' />             
                    </Form.Group>
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
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      )
    }
  }
