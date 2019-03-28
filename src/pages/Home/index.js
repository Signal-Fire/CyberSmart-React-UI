import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { DeviceStats } from '../../components/Dashlets';
import { PowerChart, DeviceChart } from '../../components/Charts';

const HomeStyle = {
    backgroundColor: '#FFF',
    height: '100%',
    padding: '20px',
    color: 'black'
}

const HomePage = () => {
  return (
    <header style = { HomeStyle } >
      <DeviceStats />
      <Grid columns = {2}>
          <Grid.Column>
            <PowerChart 
              header = "Electricty Usage"/>
          </Grid.Column>
          <Grid.Column>
            <DeviceChart 
              header = "Total Devices"/>
          </Grid.Column>     
        </Grid>
    </header>
  )
}

export default connect(null, null)(HomePage);
