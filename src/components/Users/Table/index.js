import React from 'react';
import { Table } from 'semantic-ui-react';
import { UserRows } from '../Row';
import TableHeader from './Header';
import { connect } from 'react-redux';

const TableStyle = {
    width : '80%',
    margin: 'auto',
    marginTop: '15px'
}

const UsersTable = (props) => {
    return(
        <Table 
            compact
            selectable
            textAlign = 'center'
            style = {TableStyle}>
            <TableHeader />
            <Table.Body>
                <UserRows />
            </Table.Body>
        </Table>        
    )
}

export default connect(null, null)(UsersTable);