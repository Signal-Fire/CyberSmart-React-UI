import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, DeleteButton } from '../';
import { connect } from 'react-redux';
import * as helpers from '../../../../helpers';

const Row = ({
    locations
}) => {
    return (
        locations.filter(x => x.active).map((location, index) => {            
            return (<Table.Row         
                key = { location._id }
                >
                <Table.Cell>{helpers.capz(location.name)}</Table.Cell>
                <Table.Cell width ='3'><CreatedTag location = { location.created_by_user } /></Table.Cell>
                <Table.Cell><DeleteButton id = {location._id} /></Table.Cell>
            </Table.Row>);
        })        
    );
        
}

const mapStateToProps = state => ({
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(Row);