import { GET_DEVICES, ADD_DEVICE  } from './actionTypes';
import { OPERATE_MODAL } from '../Location/actionTypes';

const initialState = {
    devices: null,
    error : false,
    isLoading : true,
    modalOpen : false
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case GET_DEVICES:
            return {
                devices : payload.error ? null : payload.devices,
                error : payload.error,
                isLoading : false
            }
        case ADD_DEVICE:
            return {
                devices : payload.error ? initialState.devices : initialState.concat(payload.devices),
                error : payload.error,
                isLoading : false
            }
        case OPERATE_MODAL:
            console.log('WAZZUP');
            return {
                ...state,
                modalOpen : !initialState.modalOpen
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}