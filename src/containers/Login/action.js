import { LOGIN_ACTION } from './actionTypes';
import { API_USERS_URL } from '../../config';

import axios from 'axios';

export const performLogin = (username, password) => dispatch => {
    axios.post(API_USERS_URL + '/login', {
        username: username,
        password: password
    }).then(res => {
            dispatch({
                type : LOGIN_ACTION,
                payload : {
                    token : res.status === 200 ? res.data.token : null,
                    error : res.status !== 200
                }
            })            
        }).catch(err => {
            dispatch({
                type : LOGIN_ACTION,
                payload : {
                    token : null,
                    error : true
                }
            })
        });
}