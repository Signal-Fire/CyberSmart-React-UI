import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, DeleteButton } from '../';
import { connect } from 'react-redux';
import * as helpers from '../../../../helpers';

const Row = ({
    locations,
    devices
}) => {
    return (
        locations.filter(x => x.active).map((location, index) => {            
            return (<Table.Row         
                key = { location._id }
                >
                <Table.Cell>{helpers.capz(location.name)}</Table.Cell>
                <Table.Cell width ='3'><CreatedTag location = { location } /></Table.Cell>
                <Table.Cell>{devices.filter(x => x.active && x.location === location.name).length || 0}</Table.Cell>
                <Table.Cell><DeleteButton id = {location._id} /></Table.Cell>
            </Table.Row>);
        })        
    );
        
}

const mapStateToProps = state => ({
    locations : state.locations.locations,
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(Row);