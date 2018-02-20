/* jshint esversion: 6 */
import React, {  Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { StatisticsWidget } from '../Exports/Widgets/Exports';

export default class StatisticsGroup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: {},
      deviceStates: {}
    };
    this.calculateStatistics = this.calculateStatistics.bind(this);
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
          dataSource: responseJson,
          deviceStates: this.calculateStatistics(responseJson)
        }, function() {
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  calculateStatistics(responseJson) {
    var deviceStates = {};
    deviceStates.activeDevices = 0;
    deviceStates.inactiveDevices = 0;
    deviceStates.errorDevices = 0;
    for(let i = 0; i < responseJson.length; i++) {
      if(responseJson[i].state === 0)
        deviceStates.activeDevices++;
      else 
        deviceStates.inactiveDevices++;
    }
    return deviceStates;
  }

  render() {
        return (     
          <Grid relaxed columns = {4}>
          <Grid.Column>
              <StatisticsWidget icon = 'power' title = 'Devices ON' number = {this.state.deviceStates.activeDevices} />
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'power' title = 'Devices OFF' number = {this.state.deviceStates.inactiveDevices} />
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'plug' title = 'Known Plugs' number = {this.state.dataSource.length}/>
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'warning' title = 'Errors' number = '0' />
            </Grid.Column>
          </Grid>
        );
  }
}
