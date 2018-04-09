import { GET_DEVICES } from '../Types/Devices';
import { API_DEVICES_URL } from '../../config';

import axios from 'axios';

export const getDevices = () => dispatch => {
    axios.get(API_DEVICES_URL + '/find/all').then(res => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : res.data,
            error : false,
            newDevice : false
        })
    }).catch(err => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : null,
            error : true,
            newDevice : false
        })
    })
}