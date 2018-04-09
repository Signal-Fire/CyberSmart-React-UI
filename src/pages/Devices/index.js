/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getDevices } from '../../actions/Devices';

//Custom components import
import { DeviceWidget } from '../../components/Exports/Widgets';
import { Panel } from '../../components/ControlPanel';

//CSS import
import '../Master.css';
import './DevicePage.css';

class DevicePage extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            devices: []
        };
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
        return (
            <header className="page-body">
                    <Panel name = 'Devices' />                             
                    <Grid stackable columns = {6}>                              
                        {this.props.devices.map((d) =>
                            <Grid.Column key = {d._id}>  
                                <DeviceWidget name = {d.name} state = {d.state} address = {d.address}/>
                            </Grid.Column>
                        )}                        
                    </Grid>
            </header>
        )
    }    
}

const mapStateToProps = state => {
    return {
        devices : state.deviceReducer.devices
    }
}

export default connect(mapStateToProps, { getDevices })(DevicePage);
