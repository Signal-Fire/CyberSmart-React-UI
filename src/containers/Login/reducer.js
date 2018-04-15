import * as actionTypes from './actionTypes';

const loginState = {
    token: null,
    error: false
}

export default function(state = loginState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.LOGIN_ACTION:
            return {
                ...state,
                token : payload.token,
                error : payload.error
            }        
        default:
            return state;
    }
}
