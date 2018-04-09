import { GET_LOCATIONS } from './actionTypes';

const initialState = {
    locations : null,
    error : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations : action.payload,
                error : action.error
            }
        default:
            return state;
    }
}