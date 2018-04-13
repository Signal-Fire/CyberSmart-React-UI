import { API_LOCATION_URL, USER_COOKIE_IDENTIFIER } from '../../config';
import { GET_LOCATIONS, ADD_LOCATION } from './actionTypes';

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

export const addLocation = (values) => dispatch => {
    axios({ method: 'POST',
            url: API_LOCATION_URL +'/insert',
            data: {
                name : values.location
            }
        }).then(res => {
            dispatch({
                type : ADD_LOCATION,
                payload: {
                    location : res.status === 201 ? res.data : null,
                    error : res.status !== 201
                }
            })
        }).catch(err => {
            dispatch({
                type : ADD_LOCATION,
                payload: {                    
                    error : true
                }
            })
        });  
}
