import { GET_DEVICES, GET_CONNECTED_DEVICES, ADD_DEVICE } from './actionTypes';
import { API_DEVICES_URL } from '../../config';

import axios from 'axios';

export const getDevices = () => dispatch => {
    axios.get(API_DEVICES_URL + '/find/all').then(res => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : res.data,
            error : false,
            newDevice : null
        })
    }).catch(err => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : null,
            error : true,
            newDevice : null
        })
    })
}

export const addDevice = (device, authorization) => dispatch => {
    axios({ 
        method: 'POST',
        url : API_DEVICES_URL + '/add',
        headers: {
            'Authorization' : authorization
        },
        data: device
    }).then(res => {
        dispatch({
            type : ADD_DEVICE,
            payload : res.data,
            error: false,
            newDevice : res.data
        })
    }).catch(err => {
        dispatch({
            type : ADD_DEVICE,
            payload : null,
            error: true,
            newDevice : null
        })
    });
}

export const getConnectedDevices = () => async(dispatch) => {
    await axios.get(API_DEVICES_URL + '/find/connected')
    .then(res => {
        dispatch({
            type : GET_CONNECTED_DEVICES,
            payload : res.data,
            error : false,
            newDevice : null
        });
    }).catch(err => {
        dispatch({
            type: GET_CONNECTED_DEVICES,
            payload: null,
            error: true,
            newDevice : null
        });
    });
}