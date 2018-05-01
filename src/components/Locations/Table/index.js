import React from 'react';
import { Table } from 'semantic-ui-react';
import { LocationRows } from '../Row';
import TableHeader from './Header';

const TableStyle = {
    width : '80%',
    margin: 'auto',
    marginTop: '15px'
}

const LocationsTable = (props) => {
    return(
        <Table 
            compact
            selectable
            textAlign = 'center'
            style = {TableStyle}>
            <TableHeader />
            <Table.Body>
                <LocationRows />
            </Table.Body>
        </Table>        
    )
}

export default (LocationsTable);