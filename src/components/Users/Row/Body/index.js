import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, DeleteButton } from '../';
import { connect } from 'react-redux';
import * as helpers from '../../../../helpers';

const Row = ({
    users
}) => {
    return (
        users.map((user, index) => {            
            return (<Table.Row         
                key = { user._id }
                >
                <Table.Cell>{helpers.capz(user.username)}</Table.Cell>     
                <Table.Cell>{helpers.capz(user.first_name) + " " + helpers.capz(user.last_name)}</Table.Cell>
                <Table.Cell width ='3'><CreatedTag signup_timestamp = { user.signup_timestamp } /></Table.Cell>
                <Table.Cell><DeleteButton id = {user._id} /></Table.Cell>
            </Table.Row>);
        })        
    );
}

const mapStateToProps = state => ({
    users : state.user.all_users
})

export default connect(mapStateToProps, null)(Row);