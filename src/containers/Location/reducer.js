import * as actionTypes from './actionTypes';

const locationState = {
    locations : null,
    isLoading : true,
    error : false,
    modalOpen : false
}

export default function(state = locationState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_LOCATIONS:
            return {
                ...state,
                locations : payload.error ? 
                    null
                    :
                    payload.locations,
                error : payload.error,
                isLoading : false
            }    
        case actionTypes.ADD_LOCATION:
            return {
                ...state,
                locations : payload.error ? 
                    state.locations 
                    : 
                    state.locations.concat(payload.location),
                error : payload.error,
                modalOpen : false,
                isLoading : false
            }     
        case actionTypes.OPERATE_MODAL:         
            return {
                ...state,
                modalOpen : payload.modalOpen
            }
        default:
            return state;
    }
}