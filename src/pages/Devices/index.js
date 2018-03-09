/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

//Config
import { API_LOCATION_URL } from '../../config';

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
          data: []
        };
      }
    
      componentDidMount() {
        axios.get(API_LOCATION_URL + '/combine/devices')
        .then(res => {
          this.setState({
            isLoading: false,
            data: res.data
          });
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
                        <Grid stackable columns = {4}>                              
                            {this.state.data.map((d) =>                             
                                <Grid.Column key = {d._id}>  
                                    <DeviceWidget name = {d.name} state = {d.state} />
                                </Grid.Column>
                            )}                        
                        </Grid>
                </header>
            )
    }
}
