import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeaders = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Device Name</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>State</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Creator</Table.HeaderCell>
                <Table.HeaderCell>Delete?</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

export default TableHeaders;