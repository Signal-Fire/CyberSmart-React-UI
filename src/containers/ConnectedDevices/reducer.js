import * as actionTypes from './actionTypes';

const initialState = {
    devices : null,
    error : false,
    isLoading : true
}

export default function(state = initialState, action) {  
    var payload = action.payload;

    switch(action.type) {        
        case actionTypes.GET_CONNECTED_DEVICES:
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
