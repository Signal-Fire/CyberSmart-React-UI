import * as actionTypes from './actionTypes';

const userState = {
    first_name : null,
    last_name : null,
    username : null,
    error : false
};

export default function(state = userState, action) {
    let payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_USER_DETAILS:           
            return {
                ...state,
                first_name : payload.error ? null : payload.user.full_name.split(' ')[0],
                last_name : payload.error ? null : payload.user.full_name.split(' ')[1],
                username : payload.error ? null : payload.user,
                error : payload.error
            }        
        default:
            return state;
    }
}