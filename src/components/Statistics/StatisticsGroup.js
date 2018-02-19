/* jshint esversion: 6 */
import React, {  Component  } from 'react';
import {  Icon,  Statistic  } from 'semantic-ui-react';

import { StatisticsWidget } from '../Exports/Widgets/Exports';

export default class StatisticsGroup extends Component {
  render() {
    return (
      <Statistic.Group widths = 'four' >   
        <StatisticsWidget icon = 'power' title = 'Devices ON' number = '4' />
        <Statistic >
          <Statistic.Value >
            <Icon name = 'power'/>
            <p>4</p>
          </Statistic.Value> 
          <Statistic.Label> 
            <p>Devices off</p> 
          </Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name = 'plug' />
              <p>5</p> 
          </Statistic.Value> 
          <Statistic.Label> 
            <p>Known smart plugs</p>
          </Statistic.Label> 
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name = 'warning' />
              <p>5</p> 
          </Statistic.Value> 
          <Statistic.Label> 
            <p>Errors</p> 
          </Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}
