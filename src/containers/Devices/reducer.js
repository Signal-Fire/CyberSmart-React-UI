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
                devices : payload.error ? null : payload.devices.filter(x => x.active),
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
                if (element._id === payload.device._id)
                    newDevices[index].state = payload.device.state
            })
            
            return {
                ...state,
                devices : newDevices,
                isLoading : false,
                error : payload.error
            }
        case actionTypes.DELETE_DEVICE:
            if (payload.error)
                return state;

            var deviceIndex = state.devices.findIndex(x => x._id === payload.device._id);            
            state.devices.splice(deviceIndex, 1);

            return {
                ...state
            }
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading : payload.isLoading
            }
        default:
            return state;
    }
}