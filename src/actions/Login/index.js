import { LOGIN_ACTION, LOGOUT_ACTION } from '../Types/Login';
import { API_USERS_URL } from '../../config';

import axios from 'axios';

export const performLogin = (username, password) => dispatch => {
    axios.post(API_USERS_URL + '/login', {
        username: username,
        password: password
    }).then(res => {
            if (res.status === 200) {
                dispatch({
                    type : LOGIN_ACTION,
                    payload : res.data.token,
                    error : false
                })
            } else {
                dispatch({
                    type : LOGIN_ACTION,
                    payload : null,
                    error : true
                })
            }
        }).catch(err => {
            dispatch({
                type : LOGIN_ACTION,
                payload : null,
                error : true
            })
        });
}

export const performLogout = () => dispatch => {
    dispatch({
        type: LOGOUT_ACTION,
        payload : null,
        error : false
    })
}