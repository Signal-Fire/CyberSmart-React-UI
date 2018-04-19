import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { CreatedTag, StateTag } from '../';
import { connect } from 'react-redux';

const handleClick = (state) => {
    return console.log(state);
}

const Row = (props) => {
    const {
        device
    } = props;

    return (
        <Table.Row positive = {device.state === 1} negative = {device.state !== 1}>
            <Table.Cell>
                {device.name}
            </Table.Cell>
            <Table.Cell>
                {device.state === 0 ?
                    <Button size = 'mini' color='green' onClick = {() => handleClick(1)}>TURN ON</Button>   
                :                     
                    <Button size = 'mini' color='red' onClick = {() => handleClick(0)}>TURN OFF</Button>
                }
                </Table.Cell>
            <Table.Cell>
                {device.location}
            </Table.Cell>
            <Table.Cell><StateTag 
                            state = {device.state} />
            </Table.Cell>
            <Table.Cell><CreatedTag 
                            name = {device.created_by_user} 
                            date = {device.date_added}/>
            </Table.Cell>
        </Table.Row>
    );
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = props => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Row);