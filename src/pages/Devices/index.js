import React from 'react';
import { connect } from 'react-redux';
import { DeviceTable } from '../../components/Device';
import { Panel } from '../../components/ControlPanel';

import '../Master.css';
import './DevicePage.css';

const DevicePage = ({
    devices
}) => {
    return(
        <header className="page-body">
            <Panel name = 'Devices' />   
            {devices !== null && devices.length > 0  ?                        
                <DeviceTable />
            :
                <p>Please add a device</p>
            }
        </header>
    );
}

const mapStateToProps = state => ({
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(DevicePage);
