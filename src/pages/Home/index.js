import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { DeviceStats } from '../../components/Dashlets';
import { PowerChart, DeviceChart } from '../../components/Charts';

import './homeStyle.css';

const HomePage = () => {
  return (
    <div className = "container">
      <div className = "device-stats">
        <DeviceStats />
      </div>
      <h1>Your Device Statistics</h1>
      <div className = "usage">
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
        </div>      
    </div>
  )
}

export default connect(null, null)(HomePage);
