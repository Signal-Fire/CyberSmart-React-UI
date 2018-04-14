import { API_LOCATION_URL } from '../../config';
import * as actionTypes from './actionTypes';
import * as reducerMethods from './reducer';

import axios from 'axios';

export const getLocations = () => dispatch => {  
    axios.get(API_LOCATION_URL + '/find/all')
        .then(res => {           
            dispatch({
                type : actionTypes.GET_LOCATIONS,
                payload: {
                    locations : res.status === 200 ? res.data : null,
                    error : res.status !== 200
                }
            });
        }).catch(err => {
            dispatch({
                type : actionTypes.GET_LOCATIONS,
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
                type : actionTypes.ADD_LOCATION,
                payload: {
                    location : res.status === 201 ? res.data : null,
                    error : res.status !== 201
                }
            })
        }).catch(err => {
            dispatch({
                type : actionTypes.ADD_LOCATION,
                payload: {                    
                    error : true
                }
            })
        });  
}

export const setModalOpen = (modalState) => dispatch => {
    console.log('STATe', modalState);
    dispatch({
        type: actionTypes.OPERATE_MODAL,
        payload : {
            modalOpen : modalState
        }
    });
}
