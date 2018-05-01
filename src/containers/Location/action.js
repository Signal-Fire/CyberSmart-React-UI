import * as config from '../../config';
import * as actionTypes from './actionTypes';

import axios from 'axios';

export const deleteLocation = (id, token, deleter) => dispatch => {
    axios({ method: 'POST',
        url: config.API_LOCATION_URL +'/delete/' + id,
        data: {
            username : deleter
        }
    }).then(res => {            
        dispatch({
            type : actionTypes.DELETE_LOCATION,
            payload: {
                location : res.status === 200 ? res.data : null,
                error : res.status !== 200
            }
        })
    }).catch(err => {
        dispatch({
            type : actionTypes.DELETE_LOCATION,
            payload: {                    
                error : true
            }
        })
    }); 
}

export const getLocations = () => dispatch => {  
    axios.get(config.API_LOCATION_URL + '/find/all')
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
            url: config.API_LOCATION_URL +'/insert',
            data: values
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
    dispatch({
        type: actionTypes.OPERATE_MODAL,
        payload : {
            modalOpen : modalState
        }
    });
}