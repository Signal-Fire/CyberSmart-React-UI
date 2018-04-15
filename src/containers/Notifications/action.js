import { GET_NOTIFICATIONS } from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getNotifications = () => dispatch => {
    console.log('trippy man');
    axios.get(config.API_NOTIFICATIONS_URL + "/find/all")
    .then(res => {
        dispatch({
            type: GET_NOTIFICATIONS,
            payload : {
                notifications : res.status === 200 ? res.data : null,
                error : res.status !== 200              
            }
        })
    }).catch(err => {
        dispatch({
            type: GET_NOTIFICATIONS,
            payload : {
                notifications : null,
                error : true         
            }
        })
    })
}