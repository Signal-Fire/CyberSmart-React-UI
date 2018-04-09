import { GET_DEVICES, GET_CONNECTED_DEVICES } from './actionTypes';
import { API_DEVICES_URL, API_LOCATION_URL } from '../../config';

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

export const addDevice = (device) => dispatch => {
    console.log(device);
}

export const getConnectedDevices = () => async(dispatch) => {
    await axios.get(API_DEVICES_URL + '/find/connected')
    .then(res => {
        dispatch({
            type : GET_CONNECTED_DEVICES,
            payload : res.data,
            error : false,
            newDevice : false
        });
    }).catch(err => {
        dispatch({
            type: GET_CONNECTED_DEVICES,
            payload: null,
            error: true,
            newDevice : false
        });
    });
}