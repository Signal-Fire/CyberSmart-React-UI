import { API_LOCATION_URL } from '../../config';
import { GET_LOCATIONS } from './actionTypes';

import axios from 'axios';

export const getLocations = () => dispatch => {    
    axios.get(API_LOCATION_URL + '/find/all')
        .then(res => {           
            dispatch({
                type : GET_LOCATIONS,
                payload : res.data,
                error : false
            });
        }).catch(err => {
            dispatch({
                type : GET_LOCATIONS,
                payload : null,
                error : true
            });
        });
}
