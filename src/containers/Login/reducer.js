import * as actionTypes from './actionTypes';

const loginState = {
    token: null,
    sidebarOpen : false,
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
        case actionTypes.OPERATE_SIDEBAR:
            return {
                ...state,
                sidebarOpen : !state.sidebarOpen
            }
        default:
            return state;
    }
}
