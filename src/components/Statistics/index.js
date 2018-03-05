/* jshint esversion: 6 */
import React, {  Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import { API_DEVICES_URL } from '../../config';

import { StatisticsWidget } from '../Exports/Widgets';

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

    for(let i = 0; i < responseJson.length; i++)
      responseJson[i].active ? deviceStates.activeDevices++ : deviceStates.inactiveDevices++;

    return deviceStates;
  }

  render() {

    const square = { width: 300, height: 175 }

        return (
           <Grid columns={4} divided inverted>
            <Grid.Column>
            <Segment circular style={square}  color='black' >
            <StatisticsWidget icon = 'power' title = 'Devices ON' number = {this.state.deviceStates.activeDevices} />
            </Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment circular style={square} color='black'  >
                <StatisticsWidget icon = 'power' title = 'Devices OFF' number = {this.state.deviceStates.inactiveDevices} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment circular  style={square} color='black'  >
                <StatisticsWidget icon = 'plug' title = 'Known Plugs' number = {this.state.dataSource.length}/>
                </Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment circular style={square} color='black'  >
                <StatisticsWidget icon = 'warning' title = 'Errors' number = '0' />
                </Segment>
              </Grid.Column>
            </Grid>
        );
  }
}
