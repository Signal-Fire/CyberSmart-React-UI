import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeaders = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Device Name</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>State</Table.HeaderCell>
                <Table.HeaderCell>Created By</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

export default TableHeaders;