import * as actionTypes from './actionTypes';

const initialState = {
    notifications : null,
    error : false,
    isLoading : true
};

export default function(state = initialState, action) {
    let payload = action.payload;

    console.log(action);
    switch(action.type) {
        case actionTypes.GET_NOTIFICATIONS:           
            return {
                ...state,                
                notifications : payload.notifications.reverse(),
                error : payload.error,
                isLoading : false
            }        
        default:
            return state;
    }
}