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
                locations : payload.error ? 
                    null
                    :
                    payload.locations,
                error : payload.error,
                isLoading : false
            }    
        case actionTypes.ADD_LOCATION:
            return {
                locations : payload.error ? 
                    locationState.locations 
                    : 
                    locationState.locations.concat(payload.location),
                error : payload.error,
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

export const getLocations = () => {
    return locationState.locations;
}

export const isLoading = () => {    
    return locationState.isLoading;
}

export const isError = () => {
    return locationState.error;
}