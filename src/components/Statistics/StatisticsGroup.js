/* jshint esversion: 6 */
import React, {  Component  } from 'react';
import { Grid } from 'semantic-ui-react';

import { StatisticsWidget } from '../Exports/Widgets/Exports';

export default class StatisticsGroup extends Component {
  render() {
    return (
      <Grid relaxed columns = {4}>
       <Grid.Column>
          <StatisticsWidget icon = 'power' title = 'Devices ON' number = '1' />
        </Grid.Column>
        <Grid.Column>
          <StatisticsWidget icon = 'power' title = 'Devices OFF' number = '4' />
        </Grid.Column>
        <Grid.Column>
          <StatisticsWidget icon = 'plug' title = 'Known Plugs' number = '5' />
        </Grid.Column>
        <Grid.Column>
          <StatisticsWidget icon = 'warning' title = 'Errors' number = '0' />
        </Grid.Column>
      </Grid>
    );
  }
}
