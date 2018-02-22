/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

//Custom components import
import { DeviceWidget } from '../../components/Exports/Widgets/Exports';

//Models
import { Device } from '../../models/Exports/Exports';

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
        this.createDevices = this.createDevices.bind(this);
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
            this.createDevices(responseJson);
            this.setState({
              isLoading: false              
            }, function() {
              
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      createDevices(responseJson) {
        for(let i = 0; i < responseJson.length; i++) {
            Device.name = responseJson[i].name;
            Device.state = responseJson[i].active ? 'ON' : 'OFF';   
            Device.id = responseJson[i]._id; 
            this.state.devices.push(Device); 
        }

        console.log(this.state.devices);
      }
    
    render() {
            return (
                <header className="page-body">       
                    <Grid relaxed columns = {6}>                              
                        {this.state.devices.map((device) => 
                            <Grid.Column>  
                                <DeviceWidget key = {device.id} name = {device.name} state = {device.state} />
                            </Grid.Column>
                        )}                        
                    </Grid>
                </header>
            )
    }
}
