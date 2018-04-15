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
            console.log(action);
            return {
                ...state,                
                notifications : payload.notifications,
                error : payload.error,
                isLoading : false
            }
        case actionTypes.ADD_NOTIFICATION:
            return {
                ...state,
                notifications : initialState.notifications.concat(payload.notifications),
                error : payload.error,
                isLoading : false
            }
        default:
            return state;
    }
}