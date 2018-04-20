import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, StateTag, StateButtons } from '../';
import { connect } from 'react-redux';

const Row = ({
    device
}) => {
    return (
        <Table.Row 
            
            positive = {device.state === 1}
            negative = {device.state !== 1}>
            <Table.Cell width = '3'>{device.name}</Table.Cell>            
            <Table.Cell width = '3'>{device.location}</Table.Cell>            
            <Table.Cell width = '3'><StateTag 
                            state = {device.state} /></Table.Cell>
                            <Table.Cell><StateButtons 
                    state = {device.state}
                    id = {device._id}
                    address = {device.address}
                /></Table.Cell>
            <Table.Cell width = '3'><CreatedTag 
                            name = {device.created_by_user} 
                            date = {device.date_added}/></Table.Cell>
        </Table.Row>
    );
}

export default connect(null, null)(Row);