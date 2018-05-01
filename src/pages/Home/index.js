import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../Master.css';
import './HomePage.css';

import { DeviceStats } from '../../components/Dashlets';
import { PowerChart } from '../../components/Charts';

const HomePage = () => {
  return (
    <header className = "page-body" >
      <DeviceStats />
      <Grid columns = {2}>
          <Grid.Column>
            <PowerChart 
              header = "Electricty Usage"/>
          </Grid.Column>
          <Grid.Column>
            <PowerChart 
              header = "Electricty Usage"/>
          </Grid.Column>
        </Grid>
    </header>
  )
}

export default HomePage;
