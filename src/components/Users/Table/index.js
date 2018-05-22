import React from 'react';
import { Table, Message } from 'semantic-ui-react';
import { UserRows } from '../Row';
import TableHeader from './Header';
import { connect } from 'react-redux';

const TableStyle = {
    width : '80%',
    margin: 'auto',
    marginTop: '15px'
}

const UsersTable = ({
    users
}) => {
    if (users !== null) {
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
    } else {
        return (
            <Message
                info
                compact>
                No users have been added yet!
            </Message>
        )
    }
}

const mapStateToProps = state => ({
    users : state.user.users
})

export default connect(mapStateToProps, null)(UsersTable);