import { GET_CONNECTED_DEVICES } from './actionTypes';

const initialState = {
    connectedDevices : null,
    error : false,
    isLoading : true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                connectedDevices : action.connectedDevices,
                error : action.error,
                isLoading : false
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.connectedDevices;
}

export const isLoading = () => {
    return initialState.isLoading;
}

export const isError = () => {
    return initialState.error
}
