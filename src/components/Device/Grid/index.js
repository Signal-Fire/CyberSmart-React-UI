import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Widget from '../Widget';
import { connect } from 'react-redux';
import { getDevices } from '../../../containers/Devices/action';
import * as deviceReducer from '../../../containers/Devices/reducer';

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
                {this.props.devices !== null ?
                this.props.devices.map((d) =>
                    <Grid.Column key = {d._id}>  
                        <Widget name = {d.name} state = {d.state} address = {d.address}/>
                    </Grid.Column>
                )
                :
                false}                        
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        devices : deviceReducer.getDevices()
    }
}

export default connect(mapStateToProps, { getDevices })(WidgetGrid);