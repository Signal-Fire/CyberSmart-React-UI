import { GET_CONNECTED_DEVICES } from './actionTypes';

const initialState = {
    devices : null,
    error : false,
    isLoading : true
}

export default function(state = initialState, action) {  
    var payload = action.payload;

    switch(action.type) {        
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                devices : payload.devices ? 
                    payload.devices 
                    : 
                    null,
                error : payload.error,
                isLoading : false
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}

export const isLoading = () => {
    return initialState.isLoading;
}

export const isError = () => {
    return initialState.error
}
