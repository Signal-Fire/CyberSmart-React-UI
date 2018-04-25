import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, StateTag, StateButtons, DeleteButton } from '../';
import { connect } from 'react-redux';
import * as helpers from '../../../../helpers';

const Row = ({
    device
}) => {
    return (
        <Table.Row             
            positive = {device.state === 1}
            negative = {device.state !== 1}
            >
            <Table.Cell>{helpers.capz(device.name)}</Table.Cell>     
            <Table.Cell>{device.address}</Table.Cell>          
            <Table.Cell>{helpers.capz(device.location)}</Table.Cell>                  
            <Table.Cell><StateTag 
                            state = {device.state} /></Table.Cell>
                            <Table.Cell><StateButtons 
                    state = {device.state}
                    id = {device._id}
                    address = {device.address}
                /></Table.Cell>
            <Table.Cell width ='3'><CreatedTag 
                            name = {device.created_by_user} 
                            date = {device.date_added}/></Table.Cell>
            <Table.Cell><DeleteButton id = {device._id} /></Table.Cell>
        </Table.Row>
    );
}

export default connect(null, null)(Row);