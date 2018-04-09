import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/types';

const initialState = {
    token: null,
    error: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                token : action.payload,
                error : action.error
            }
        case LOGOUT_ACTION:
            return console.log('Logged out');
        default:
            return state;
    }
}