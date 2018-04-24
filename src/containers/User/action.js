import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getUserDetailsFrom = (token) => dispatch => {
    console.log(token);
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