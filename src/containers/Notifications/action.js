import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getNotifications = () => dispatch => {
    axios.get(config.API_NOTIFICATIONS_URL + "/find/all")
    .then(response => {
        dispatch({
            type: actionTypes.GET_NOTIFICATIONS,
            payload : {
                notifications : response.data,
                error : response.status !== 200              
            }
        })
    }).catch(err => {
        dispatch({
            type: actionTypes.GET_NOTIFICATIONS,
            payload : {
                notifications : null,
                error : true         
            }
        })
    })
}