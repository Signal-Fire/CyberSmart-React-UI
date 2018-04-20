import * as config from '../../config';
import * as actionTypes from './actionTypes';

import axios from 'axios';

export const getConnectedDevices = () => async(dispatch) => {
    await axios.get(config.API_DEVICES_URL + '/find/connected')
    .then(res => {
        dispatch({
            type : actionTypes.GET_CONNECTED_DEVICES,
            payload: {
                devices : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        });
    }).catch(err => {
        dispatch({
            type: actionTypes.GET_CONNECTED_DEVICES,
            payload : {
                error : true
            }
        });
    });
}