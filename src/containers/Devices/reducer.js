import { GET_DEVICES, GET_CONNECTED_DEVICES  } from './actionTypes';

const initialState = {
    devices: null,
    connectedDevices : null,
    error : false,
    newDevice : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices : action.payload,
                error : action.error,
                newDevice : false
            }    
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                connectedDevices : action.payload,
                error : action.error,
                newDevice : false
            };            
        default:
            return state;
    }
}