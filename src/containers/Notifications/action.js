import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getNotifications = () => dispatch => {
    axios.get(config.API_NOTIFICATIONS_URL + "/find/all")
    .then(res => {
        dispatch({
            type: actionTypes.GET_NOTIFICATIONS,
            payload : {
                notifications : res.data,
                error : res.status !== 200              
            }
        })
    }).catch(err => {
        dispatch({
            type: actionTypes.GET_NOTIFICATIONS,
            payload : {
                error : true         
            }
        })
    })
}