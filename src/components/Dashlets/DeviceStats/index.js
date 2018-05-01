import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Widget from './Widget';

const DeviceStats = ({
  state
}) => {
    return (
      <Grid
        columns = {5}
        relaxed
        inverted>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'power',
                  title : 'Devices On',
                  number : state.devices ? state.devices.filter(x => x.state === 1 && x.active).length : 0,
                  color : 'green'
                }}
              />
          </Grid.Column>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'power',
                  title : 'Devices Off',
                  number : state.devices ? state.devices.filter(x => x.state === 0 && x.active).length : 0,
                  color : 'red'
                }}
              />              
          </Grid.Column>
          <Grid.Column>
              <Widget 
                stats = {{
                  icon : 'home',
                  title : 'Total Rooms',
                  number : state.devices ? state.locations.filter(x => x.active).length : 0,
                  color : 'blue'
                }}
              />   
            </Grid.Column> 
            <Grid.Column>                
              <Widget 
                stats = {{
                  icon : 'plug',
                  title : 'Total Devices',
                  number : state.devices ? state.devices.filter(x => x.active).length : 0,
                  color : 'orange'
                }}
              />            
          </Grid.Column>
          <Grid.Column>                
              <Widget 
                stats = {{
                  icon : 'user',
                  title : 'Total Users',
                  number : state.all_users ? state.all_users.length : 0,
                  color : 'black'
                }}
              />            
          </Grid.Column>
      </Grid>
    );
}

const mapStateToProps = state => ({
  state : {
    locations : state.locations.locations,
    devices : state.devices.devices,
    all_users : state.user.all_users
  }
});

export default connect(mapStateToProps, null)(DeviceStats);

