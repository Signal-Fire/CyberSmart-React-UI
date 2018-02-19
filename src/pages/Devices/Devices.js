/*jshint esversion: 6*/
import React, { Component } from 'react';

//Custom components import
import { DeviceWidget } from '../../components/Exports/Exports';

//CSS import
import '../Master.css';
import './DevicePage.css';

export default class DevicePage extends Component {
    render() {
        return (
            <header className="page-body">
                <DeviceWidget name = 'Lamp' state = 'ON' />
                <DeviceWidget name = 'TV' state = 'OFF' />
                <DeviceWidget name = 'Cooker' state = 'ON' />
            </header>
        )
    }
}
