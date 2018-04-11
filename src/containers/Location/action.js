import { API_LOCATION_URL } from '../../config';
import { GET_LOCATIONS } from './actionTypes';

import axios from 'axios';

export const getLocations = () => dispatch => {    
    axios.get(API_LOCATION_URL + '/find/all')
        .then(res => {           
            dispatch({
                type : GET_LOCATIONS,
                payload: {
                    locations : res.status === 200 ? res.data : null,
                    error : res.status !== 200
                }
            });
        }).catch(err => {
            dispatch({
                type : GET_LOCATIONS,
                payload : {
                    error : true
                }
            });
        });
}
