import { LOGIN_ACTION } from './actionTypes';

const initialState = {
    token: null,
    error: false
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                token : payload.token,
                error : payload.error
            }        
        default:
            return state;
    }
}