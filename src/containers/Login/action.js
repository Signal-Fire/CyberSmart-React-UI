import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const performLogin = (username, password) => dispatch => {   
    axios.post(config.API_USERS_URL + '/login', {
        username: username,
        password: password
    }).then(res => {
            dispatch({
                type : actionTypes.LOGIN_ACTION,
                payload : {
                    token : res.status === 200 ? res.data.token : null,
                    error : res.status !== 200
                }
            })            
        }).catch(err => {
            dispatch({
                type : actionTypes.LOGIN_ACTION,
                payload : {
                    token : null,
                    error : true
                }
            })
        });
}

export const operateModal = (modalState) => dispatch => {
    dispatch({
        type: actionTypes.OPERATE_MODAL,
        payload: {
            modalOpen : modalState
        }
    })
}