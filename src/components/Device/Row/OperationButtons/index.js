import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { operateDevice } from '../../../../containers/Devices/action';

const OperationButtons = ({
    state,
    id,
    address,
    operateDevice
}) => {
    return(
        <div>
            {state === 0 ?
                <Button size = 'mini' color='green' onClick = {() => operateDevice(1, address, id)}>TURN ON</Button>   
            :                     
                <Button size = 'mini' color='red' onClick = {() => operateDevice(0, address, id)}>TURN OFF</Button>
            }
        </div>
    );
}

const mapStateToProps = props => ({

})

const mapDispatchToProps = (dispatch) => ({
    operateDevice : (state, address, id) => { dispatch(operateDevice(state, address, id)); window.location.reload() }
})

export default connect(mapStateToProps, mapDispatchToProps)(OperationButtons);