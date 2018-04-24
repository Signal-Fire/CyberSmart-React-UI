import * as actionTypes from './actionTypes';

const userState = {
    first_name : null,
    last_name : null,
    username : null,
    error : false,
    modalOpen : false
};

export default function(state = userState, action) {
    let payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_USER_DETAILS:           
            return {
                ...state,
                first_name : payload.error ? null : payload.user.full_name.split(' ')[0],
                last_name : payload.error ? null : payload.user.full_name.split(' ')[1],
                username : payload.error ? null : payload.user.username,
                error : payload.error
            } 
        case actionTypes.OPERATE_MODAL:
            return {
                ...state,
                modalOpen : payload.isOpen
            }
        case actionTypes.UPDATE_USER_DETAILS:
            return {
                ...state,
                first_name : payload.error ? state.first_name : payload.user.full_name.split(' ')[0],
                last_name : payload.error ? state.last_name : payload.user.full_name.split(' ')[1],
                username : payload.error ? state.username : payload.user.username,
            }            
        default:
            return state;
    }
}