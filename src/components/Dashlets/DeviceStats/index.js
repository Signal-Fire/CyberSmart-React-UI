import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Widget from './Widget';

const DeviceStats = ({
  state
}) => {
    return (
      <Grid
        columns = {4}
        relaxed
        inverted>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'power',
                  title : 'Devices On',
                  number : state.devices.filter(x => x.state === 1 && x.active).length,
                  color : 'green'
                }}
              />
          </Grid.Column>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'power',
                  title : 'Devices Off',
                  number : state.devices.filter(x => x.state === 0 && x.active).length,
                  color : 'red'
                }}
              />              
          </Grid.Column>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'home',
                  title : 'Total Rooms',
                  number : state.locations.filter(x => x.active).length,
                  color : 'blue'
                }}
              />   
            </Grid.Column> 
            <Grid.Column>                
              <Widget 
                stats = {{
                  icon : 'plug',
                  title : 'Total Devices',
                  number : state.devices.filter(x => x.active).length,
                  color : 'orange'
                }}
              />            
          </Grid.Column>
      </Grid>
    );
}

const mapStateToProps = state => ({
  state : {
    locations : state.locations.locations,
    devices : state.devices.devices
  }
});

export default connect(mapStateToProps, null)(DeviceStats);

