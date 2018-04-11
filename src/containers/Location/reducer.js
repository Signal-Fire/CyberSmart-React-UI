import { GET_LOCATIONS } from './actionTypes';

const locationState = {
    locations : null,
    isLoading : true,
    error : false
}

export default function(state = locationState, action) {
    var payload = action.payload;

    switch(action.type) {
        case GET_LOCATIONS:
            return {
                locations : payload.error ? 
                    null
                    :
                    payload.locations,
                error : payload.error,
                isLoading : false
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