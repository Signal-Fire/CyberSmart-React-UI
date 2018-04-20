import React from 'react';
import { Table } from 'semantic-ui-react';
import { DeviceRow } from '../Row';
import TableHeader from './Header';
import { connect } from 'react-redux';

const TableStyle = {
    width : '80%',
    margin: 'auto',
    marginTop: '15px'
}

const DeviceTable = (props) => {
    const {
        devices
    } = props;

    return(
        <Table 
            compact
            selectable
            textAlign = 'center'
            style = {TableStyle}>
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

export default connect(mapStateToProps, null)(DeviceTable);