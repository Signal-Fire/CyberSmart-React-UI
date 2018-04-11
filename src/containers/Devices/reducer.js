import { GET_DEVICES, GET_CONNECTED_DEVICES, ADD_DEVICE  } from './actionTypes';

const initialState = {
    devices: null,
    error : false,
    connectedDevices : null,
    connectedDevicesError : false,
    newDevice : null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices : action.error ? null : action.devices,
                error : action.error
            }    
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                connectedDevices : action.error ?
                    null
                    :
                    action.connectedDevices,
                error : action.error
            };   
        case ADD_DEVICE:
            return {
                ...state,
                devices : action.error ? 
                    initialState.devices 
                    : 
                    initialState.devices.concat(action.devices),
                error : action.error
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}

export const getConnectedDevicesDropdown = () => {
    if (initialState.connectedDevices === null ||
        initialState.connectedDevices.length < 1)
            return null;

    var data = initialState.connectedDevices.forEach(item => {       
        item.label = item.name;
        item.value = item._id;
        item.type = 'connected';          
    });

    return data;
}