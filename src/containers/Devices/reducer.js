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
                devices : action.payload,
                error : action.error,
                newDevice : null
            }    
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                connectedDevices : action.payload,
                connectedDevicesError : action.error,
                newDevice : null
            };   
        case ADD_DEVICE:
            return {
                ...state,
                devices : action.newDevice !== null ? 
                    initialState.devices + action.payload
                    :
                    initialState.devices,
                error : action.newDevice === null,
                newDevice : action.newDevice !== null
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}

export const createConnectedDevicesDropdown = () => {
    if (initialState.connectedDevices === null ||
        initialState.connectedDevices.length < 1)
        return null;

    var data = initialState.connectedDevices.forEach(item => {           
        item.key = item._id;  
        item.text = item.name;
        item.value = item._id;               
    });

    return data;
}