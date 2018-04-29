import * as actionTypes from './actionTypes';
import * as loginActions from '../Login/actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getAllUsers = (token) => dispatch => {
    axios({
        headers : {
            'Authorization' : token
        },
        url : config.API_USERS_URL + "/find/all"
    })
    .then(res => {
        dispatch({
            type : actionTypes.GET_ALL_USERS,
            payload : {
                users : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        })
    }).catch(err => {
        dispatch({
            type : actionTypes.GET_ALL_USERS,
            payload : {
                error : true
            }
        })
    })
}

export const addUser = (user, token) => async(dispatch) => {
    await axios({
        method : 'POST',
        url : config.API_USERS_URL + "/register",
        headers : {
            'Authorization' : token
        },
        data : user
    }).then(res => {
        dispatch({
            type : actionTypes.ADD_USER,
            payload : {
                user : res.status === 201 ? res.data : null,
                error : res.status !== 201
            }
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ADD_USER,
            payload : {
                error : true
            }
        })
    });
}

export const deleteUser = (id, token, callback) => async(dispatch) => {
    await axios({
        method : 'POST',
        headers : {
            'Authorization' : token
        },
        url : config.API_USERS_URL + "/delete/" + id
    })
    .then(res => {        
        dispatch({
            type : actionTypes.DELETE_USER,
            payload : {
                user : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        })
        callback('done')
    }).catch(err => {
        dispatch({
            type : actionTypes.DELETE_USER,
            payload : {
                error : true
            }
        })
        callback('error')
    })
}

export const getUserDetailsFrom = (token) => dispatch => {    
    axios({
        headers : {
            'Authorization' : token
        },
        url : config.API_USERS_URL + "/find/user/details"
    })
    .then(res => {
        dispatch({
            type: actionTypes.GET_USER_DETAILS,
            payload : {
                user : res.data,
                error : res.status !== 200              
            }
        })
    }).catch(err => {
        dispatch({
            type: actionTypes.GET_USER_DETAILS,
            payload : {
                error : true         
            }
        })
    })
}

export const updateUserDetails = (user, token) => dispatch => {
    axios({
        method : 'POST',
        headers: {
            'Authorization' : token
        },
        url : config.API_USERS_URL + "/update/user",
        data : user
    })
    .then(res => {
        if (res.status === 200)
            dispatch({
                type : loginActions.LOGIN_ACTION,
                payload : {
                    token : res.data.token,
                    error : false
                }
            })

        dispatch({
            type : actionTypes.UPDATE_USER_DETAILS,
            payload: {                
                user : user,
                error : res.status !== 200
            }
        })
    }).catch(err => {
        dispatch({
            type : actionTypes.UPDATE_USER_DETAILS,
            payload: {
                error : true
            }
        })
    });
}

export const setModalOpen = (modalState) => dispatch => {    
    dispatch({
        type : actionTypes.OPERATE_MODAL,
        payload : {
            isOpen : modalState
        }
    })
}

export const setCreateModalOpen = (modalState) => dispatch => {
    dispatch({
        type : actionTypes.OPERATE_CREATE_MODAL,
        payload : {
            createModalOpen : modalState
        }
    })
}