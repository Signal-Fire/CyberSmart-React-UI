import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Widget from '../Widget';
import { connect } from 'react-redux';
import { getDevices } from '../../../containers/Devices/action';

class WidgetGrid extends Component {
    constructor() {
        super();
        
        this.state = {
            devices : []
        }
    }

    componentDidMount = () => {
        this.props.getDevices();
    }   
      
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.newDevice) {
            this.props.getDevices();
        }
    }

    render() {
        return(
            <Grid stackable columns = {6}>                              
                {this.props.devices.map((d) =>
                    <Grid.Column key = {d._id}>  
                        <Widget name = {d.name} state = {d.state} address = {d.address}/>
                    </Grid.Column>
                )}                        
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        devices : state.deviceReducer.devices
    }
}

export default connect(mapStateToProps, { getDevices })(WidgetGrid);