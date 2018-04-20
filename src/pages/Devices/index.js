/*jshint esversion: 6*/
import React, { Component } from 'react';
import { DeviceTable } from '../../components/Device';
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
    
    render() {
        return (
            <header className="page-body">
                <Panel name = 'Devices' />                             
                <DeviceTable />
            </header>
        )
    }    
}

export default DevicePage;
