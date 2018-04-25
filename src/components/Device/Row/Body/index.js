import React from 'react';
import { Table } from 'semantic-ui-react';
import { CreatedTag, StateTag, StateButtons, DeleteButton } from '../';
import { connect } from 'react-redux';
import * as helpers from '../../../../helpers';

const Row = ({
    devices
}) => {
    return (
        devices.filter(x => x.active).map((d, index) => {            
            return (<Table.Row         
                key = { d._id }
                >
                <Table.Cell>{helpers.capz(d.name)}</Table.Cell>     
                <Table.Cell>{d.address}</Table.Cell>          
                <Table.Cell>{helpers.capz(d.location)}</Table.Cell>                  
                <Table.Cell><StateTag id = { d._id } /></Table.Cell>
                <Table.Cell><StateButtons id = { d._id }/></Table.Cell>
                <Table.Cell width ='3'><CreatedTag device = { d } /></Table.Cell>
                <Table.Cell><DeleteButton id = {d._id} /></Table.Cell>
            </Table.Row>);
        })   
    );
}

const mapStateToProps = state => ({
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(Row);