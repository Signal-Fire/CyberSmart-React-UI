import * as actionTypes from './actionTypes';

const initialState = {
    notifications : null,
    error : false,
    isLoading : true
};

export default function(state = initialState, action) {
    let payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_NOTIFICATIONS:  
            return {
                ...state,                
                notifications : (payload.error) ? null : payload.notifications.reverse().slice(0, 5),
                error : payload.error,
                isLoading : false
            }        
        default:
            return state;
    }
}