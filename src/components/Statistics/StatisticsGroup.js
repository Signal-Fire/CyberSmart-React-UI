/* jshint esversion: 6 */
import React, {  Component  } from 'react';
import {  Icon,  Statistic  } from 'semantic-ui-react';

import { StatisticsWidget } from '../Exports/Widgets/Exports';

export default class StatisticsGroup extends Component {
  render() {
    return (
      <Statistic.Group widths = 'four' >
        <StatisticsWidget icon = 'power' title = 'Devices ON' number = '1' />
        <StatisticsWidget icon = 'power' title = 'Devices OFF' number = '4' />
        <StatisticsWidget icon = 'plug' title = 'Known Plugs' number = '5' />
        <StatisticsWidget icon = 'warning' title = 'Errors' number = '0' />
      </Statistic.Group>
    );
  }
}
