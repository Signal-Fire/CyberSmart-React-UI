import React from 'react';
import { connect } from 'react-redux';
import { DeviceTable } from '../../components/Device';
import { Panel } from '../../components/ControlPanel';
import { AddMe } from '../../components/Messages';

import '../Master.css';
import './DevicePage.css';

const DevicePage = ({
    devices
}) => {
    return(
        <header className="page-body">
            <Panel name = 'Devices' />   
            {
                devices !== null ?           
                    devices.filter(x => x.active).length > 0 ?                        
                        <DeviceTable />
                    : <AddMe objects = 'Devices' />
                : <AddMe objects = 'Devices' />
            }
        </header>
    );
}

const mapStateToProps = state => ({
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(DevicePage);
