import { LOGIN_ACTION } from './actionTypes';

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
        default:
            return state;
    }
}