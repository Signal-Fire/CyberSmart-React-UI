import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { DeviceStats } from '../../components/Dashlets';
import { PowerChart, DeviceChart } from '../../components/Charts';

import './homeStyle.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (!isMobile) {
    return(      
      <div className = "container">
        <div className = "device-stats">
          <DeviceStats />
        </div>    
        <h1>Your Device Statistics {width}</h1>
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
    );
    } else {
      return (
        <div className = "container">
          <div className = "device-stats">
            <DeviceStats />
          </div>
        </div>
      );
    }
  }
}

export default connect(null, null)(HomePage);
