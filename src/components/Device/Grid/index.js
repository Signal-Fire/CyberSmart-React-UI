import React from 'react';
import { Table } from 'semantic-ui-react';
import { DeviceRow } from '../Row';
import { connect } from 'react-redux';

const WidgetGrid = (props) => {
    const {
        devices
    } = props;

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Device Name</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>Created By</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
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