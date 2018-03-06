/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

//Config
import { API_DEVICES_URL } from '../../config';

//Custom components import
import { DeviceWidget } from '../../components/Exports/Widgets';

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
          this.setState({
            isLoading: false,
            devices: res.data
          });
        }).catch(err => {
          console.error(err);
        });
      }     
    
    render() {
            return (
                <header className="page-body">       
                    <Grid stackable columns = {4}>                              
                        {this.state.devices.map((device) =>                             
                            <Grid.Column key = {device._id}>  
                                <DeviceWidget name = {device.name} state = {device.state} />
                            </Grid.Column>
                        )}                        
                    </Grid>
                </header>
            )
    }
}
