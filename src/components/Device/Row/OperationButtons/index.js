import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { operateDevice, setIsLoading } from '../../../../containers/Devices/action';

const OperationButtons = ({
    device,
    isLoading,
    operateDevice
}) => {
    try {
        return(            
            <Button 
                size = 'mini' 
                disabled = { isLoading }
                loading = { isLoading }
                color={device.state === 0 ? 'green' : 'red' } 
                onClick = {() => operateDevice((device.state === 0 ? 1 : 0), device.address, device._id)}
            >
                TURN {device.state === 0 ? 'ON' : 'OFF'}
            </Button>   
        );
    } catch (ex) {
        return(<div></div>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    device : state.devices.devices.find(x => x._id === ownProps.id),
    isLoading : state.devices.isLoading
})

const mapDispatchToProps = (dispatch, props) => ({
    operateDevice : (state, address, id) => {         
        dispatch(setIsLoading(true))
        dispatch(operateDevice(state, address, id, (cb) => {        
            console.log(cb);    
            window.location.reload();        
        })
    ); }
})

export default connect(mapStateToProps, mapDispatchToProps)(OperationButtons);