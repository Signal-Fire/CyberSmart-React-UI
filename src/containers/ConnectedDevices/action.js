import { API_DEVICES_URL } from '../../config';
import { GET_CONNECTED_DEVICES } from './actionTypes';

import axios from 'axios';

export const getConnectedDevices = () => async(dispatch) => {
    await axios.get(API_DEVICES_URL + '/find/connected')
    .then(res => {
        dispatch({
            type : GET_CONNECTED_DEVICES,
            payload: {
                devices : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        });
    }).catch(err => {
        dispatch({
            type: GET_CONNECTED_DEVICES,
            payload : {
                error : true
            }
        });
    });
}