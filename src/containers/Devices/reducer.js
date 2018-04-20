import * as actionTypes from './actionTypes';

const initialState = {
    devices: null,
    error : false,
    isLoading : true,
    modalOpen : false
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_DEVICES:
            return {
                ...state,
                devices : payload.error ? null : payload.devices,
                error : payload.error,
                isLoading : false
            }
        case actionTypes.ADD_DEVICE:
            return {
                ...state,
                devices : payload.error ? state.devices : state.devices.concat(payload.device),
                error : payload.error,
                isLoading : false
            }
        case actionTypes.OPERATE_MODAL:           
            return {
                ...state,
                modalOpen : payload.modalOpen
            }
        case actionTypes.OPERATE_DEVICE:
            if (payload.error)
                return state;
                
            var newDevices = state.devices;

            newDevices.forEach((element, index) => {
                if (element._id === payload.deviceId)
                    newDevices[index].state = payload.state
            })
            return {
                ...state,
                devices : newDevices,
                isLoading : false,
                error : payload.error
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}