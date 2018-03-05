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

export default class DevicePage extends Component {
    constructor() {
        super();
        this.state = {
          isLoading: true,
          devices: []
        };
      }
    
      componentDidMount() {
        return fetch({API_DEVICES_URL} + '/find/all', {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              devices: responseJson              
            }, function() {

            });
          })
          .catch((error) => {
            console.error(error);
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
