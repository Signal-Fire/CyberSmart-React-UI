import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeaders = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Full Name</Table.HeaderCell>
                <Table.HeaderCell>Created Date</Table.HeaderCell>
                <Table.HeaderCell>Delete?</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

export default TableHeaders;