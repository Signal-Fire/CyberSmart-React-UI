import React from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';

const StateTag = ({
    device
}) => {
    return (
        <Label
            color = {device.state === 0 ? 'red' : 'green'}>
            {device.state === 0 ? 'OFF' : 'ON'}
        </Label>
    );
}

const mapStateToProps = (state, ownProps) => ({
    device : state.devices.devices.find(x => x._id === ownProps.id),
    isLoading : state.devices.isLoading
})

export default connect(mapStateToProps, null)(StateTag);