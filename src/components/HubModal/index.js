/*jshint esversion: 6*/
import React, { Component } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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
        const data = [
            {time: '21:00', cpu: 20},
            {time: '21:30', cpu: 80},
            {time: '22:00', cpu: 90},
            {time: '22:30', cpu: 95},
            {time: '23:00', cpu: 10},
            {time: '23:30', cpu: 12},
            {time: '00:00', cpu: 33},
      ];

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
              <Form stackable>
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
                    <div>
                    <Header as ='h3' textAlign='center'>CPU Usage</Header>
                    <Grid.Column>
                            <AreaChart width={600} height={200} data={data}
                                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <XAxis dataKey="time" />
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Area connectNulls={true} type='monotone' dataKey='cpu' stroke='#fff' fill='#0534b7' label='CPU (%)'/>
                        </AreaChart>
                    </Grid.Column>
                    </div>
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
