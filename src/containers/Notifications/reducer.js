import * as actionTypes from './actionTypes';

const notificationState = {
    notifications : null,
    error : false,
    isLoading : true
};

export default function(state = notificationState, action) {
    let payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_NOTIFICATIONS:
            return {
                ...state,
                notifications : payload.notifications,
                error : payload.error,
                isLoading : false
            }
        case actionTypes.ADD_NOTIFICATION:
            return {
                ...state,
                notifications : notificationState.notifications.concat(payload.notifications),
                error : payload.error,
                isLoading : false
            }
        default:
            return state;
    }
}