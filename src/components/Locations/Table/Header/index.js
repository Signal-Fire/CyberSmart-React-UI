import React from 'react';
import { Table } from 'semantic-ui-react';

export default () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Location Name</Table.HeaderCell>
                <Table.HeaderCell>Created Date</Table.HeaderCell>
                <Table.HeaderCell>Devices in Room</Table.HeaderCell>
                <Table.HeaderCell>Delete?</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}