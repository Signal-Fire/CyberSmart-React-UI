/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

//Config
import { API_DEVICES_URL } from '../../config';

//Custom components import
import { DeviceWidget, DeviceControlPanel } from '../../components/Exports/Widgets';

//CSS import
import '../Master.css';
import './DevicePage.css';

import axios from 'axios';

export default class DevicePage extends Component {
    constructor() {
        super();
        this.state = {
          isLoading: true,
          devices: []
        };
      }
    
      componentDidMount() {
        axios.get(API_DEVICES_URL + '/find/all')
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    devices: res.data
                });
            } else {
                this.forceUpdate();
            }
        }).catch(err => {
          console.error(err);
        });
      }     
    
    render() {
            return (
                <header className="page-body">
                    <Grid stackable columns = {1} divided = 'vertically'>
                        <Grid.Column verticalAlign = 'middle'>
                            <DeviceControlPanel />
                        </Grid.Column>                        
                    </Grid>              
                        <Grid stackable columns = {6}>                              
                            {this.state.devices.map((d) =>
                                <Grid.Column key = {d._id}>  
                                    <DeviceWidget name = {d.name} state = {d.state} address = {d.address}/>
                                </Grid.Column>
                            )}                        
                        </Grid>
                </header>
            )
    }
}
