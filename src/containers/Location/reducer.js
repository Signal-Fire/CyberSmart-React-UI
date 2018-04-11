import { GET_LOCATIONS } from './actionTypes';

const initialState = {
    locations : null,
    isLoading : true,
    error : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LOCATIONS:
            return Object.assign({}, state, {
                locations : action.error ? 
                    null
                    :
                    action.payload.locations,
                error : action.error,
                isLoading : false
            })            
        default:
            return state;
    }
}

export const getLocations = () => {
    return initialState.locations;
}

export const isLoading = () => {    
    return initialState.isLoading;
}

export const isError = () => {
    return initialState.error;
}