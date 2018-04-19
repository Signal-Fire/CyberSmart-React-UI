import React from 'react';
import { Table } from 'semantic-ui-react';
import { DeviceRow } from '../Row';
import TableHeader from './Header';
import { connect } from 'react-redux';

const WidgetGrid = (props) => {
    const {
        devices
    } = props;

    return(
        <Table 
            celled
            textAlign = 'center'>
            <TableHeader />
            <Table.Body>
                { devices !== null ?
                devices.map((d => {
                    return (<DeviceRow 
                        device = {d}
                        key = {d._id}/>);
                }))
                :
                false
                }
            </Table.Body>
        </Table>        
    )
}

const mapStateToProps = (state) => ({
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(WidgetGrid);