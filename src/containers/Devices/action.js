import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getDevices = () => dispatch => {
    axios.get(config.API_DEVICES_URL + '/find/all').then(res => {
        dispatch({ 
            type: actionTypes.GET_DEVICES, 
            payload: {
                devices : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        })
    }).catch(err => {
        dispatch({ 
            type: actionTypes.GET_DEVICES, 
            payload : {
                error : true
            }
        })
    })
}

export const addDevice = (device, authorization) => dispatch => {
    axios({ 
        method: 'POST',
        url : config.API_DEVICES_URL + '/insert',
        headers: {
            'Authorization' : authorization
        },
        data: device
    }).then(res => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                device : res.data,
                error : false
            }
        })
    }).catch(err => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                error : true
            }
        })
    });
}

export const operateDevice = (deviceState, address, id) => async(dispatch) => {
    await axios({
        method: 'POST',
        url : config.API_DEVICES_URL + '/update/state',
        data : {
            address : address,
            state : deviceState,
            deviceId : id
        }
    }).then(res => {
        dispatch({
            type : actionTypes.OPERATE_DEVICE,
            payload : {
                device : res.status === 200 ? res.data : null,
                error : res.status !== 201,                
            }
        })
    }).catch(err => {
        dispatch({
            type : actionTypes.OPERATE_DEVICE,
            payload : {
                error : true                
            }
        })
    });
}

export const setModalOpen = (modalState) => dispatch => {
    dispatch({
        type: actionTypes.OPERATE_MODAL,
        payload: {
            modalOpen : modalState
        }
    });
}