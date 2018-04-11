import { GET_DEVICES, ADD_DEVICE  } from './actionTypes';

const initialState = {
    devices: null,
    error : false,
    isLoading : true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DEVICES:
            return Object.assign({}, state, {
                devices : action.error ? null : action.devices,
                error : action.error,
                isLoading : false
            }) 
        case ADD_DEVICE:
            return Object.assign({}, state, {
                devices : action.error ? initialState.devices : initialState.concat(action.devices),
                error : action.error,
                isLoading : false
            }) 
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}