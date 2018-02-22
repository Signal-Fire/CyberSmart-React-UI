/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

//Custom components import
import { DeviceWidget } from '../../components/Exports/Widgets/Exports';

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
        return fetch('http://localhost:8080/api/action/find_devices', {
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
                    <Grid relaxed columns = {6}>                              
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
