/*jshint esversion: 6*/
import React, { Component } from 'react';

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
          devices: {}
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
            this.setState({
              isLoading: false,
              devices: this.createDevices(responseJson)
            }, function() {
              
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      createDevices(responseJson) {
        var device = {};
        var devices = [];
        device.name = "";
        device.state = "";
        
        for(let i = 0; i < responseJson.length; i++) {
            device.name = responseJson[i].name;
            device.state = responseJson[i].active ? 'ON' : 'OFF';    
            devices.push(device);                  
        }

        return devices;
      }
    
    render() {
        return (
            <header className="page-body">
                <DeviceWidget name = 'Lamp' state = 'ON' />
                <DeviceWidget name = 'TV' state = 'OFF' />
                <DeviceWidget name = 'Cooker' state = 'ON' />
            </header>
        )
    }
}
