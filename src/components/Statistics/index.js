/* jshint esversion: 6 */
import React, {  Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { API_DEVICES_URL } from '../../config';

import { StatisticsWidget } from '../Exports/Widgets';

import axios from 'axios';

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
    axios.get(API_DEVICES_URL + '/find/all')
    .then(res => {
      this.setState({
        isLoading : false,
        deviceStates : this.calculateStatistics(res.data)
      });
    }).catch(err => {
      console.error(err);
    });
  }

  calculateStatistics(responseJson) {
    var deviceStates = {};
    deviceStates.activeDevices = 0;
    deviceStates.inactiveDevices = 0;
    deviceStates.errorDevices = 0;
    deviceStates.count = 0;

    for(let i = 0; i < responseJson.length; i++) {
      // eslint-disable-next-line
      (parseInt(responseJson[i].state)) === 1 ? deviceStates.activeDevices++ : deviceStates.inactiveDevices++;
      deviceStates.count++;
    }

    return deviceStates;
  }

  render() {
        return (
           <Grid columns={4} relaxed inverted>
            <Grid.Column>
              <StatisticsWidget icon = 'power' title = 'Devices ON' number = {this.state.deviceStates.activeDevices} />
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'power' title = 'Devices OFF' number = {this.state.deviceStates.inactiveDevices} />
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'plug' title = 'Known Plugs' number = {this.state.deviceStates.count}/>
            </Grid.Column>
            <Grid.Column>
              <StatisticsWidget icon = 'warning' title = 'Errors' number = '0' />
            </Grid.Column>
          </Grid>
        );
  }
}
