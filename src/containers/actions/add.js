import * as ActionType from '../actionTypes';
import * as Thing from '../Things';
import * as Configuration from '../../config';

import axios from 'axios';

var ActionDescriptor = {
    ActionType : '',
    URL : ''
};

export const Add = (type, data, authorization) => dispatch => {
    switch(type) {
        case Thing.Device:
            ActionDescriptor.ActionType = ActionType.ADD_DEVICE;
            ActionDescriptor.URL = Configuration.API_DEVICES_URL;
        break;
        case Thing.Location:
            ActionDescriptor.ActionType = ActionType.ADD_LOCATION;
            ActionDescriptor.URL = Configuration.API_LOCATION_URL;
        break;
        case Thing.Notification:
            ActionDescriptor.ActionType = ActionType.ADD_NOTIFICATION;
            ActionDescriptor.URL = Configuration.API_NOTIFICATIONS_URL
        break;
        case Thing.User:
            ActionDescriptor.ActionType = ActionType.ADD_USER;
            ActionDescriptor.URL = Configuration.API_USERS_URL;
        break;
        default:
        return;
    }

    ActionDescriptor.URL = ActionDescriptor.URL + '/insert';
    ActionDescriptor.Data = data;
    ActionDescriptor.Authorization = authorization;

    console.log(ActionDescriptor);
    
    axios({
        method : 'POST',
        url : ActionDescriptor.URL,
        headers : {
            'Authorization' : ActionDescriptor.Authorization
        },
        data : ActionDescriptor.Data
    }).then(response => {
        dispatch({
            type : ActionDescriptor.ActionType,
            payload : {
                data : response.data,
                action : ActionDescriptor.ActionType,
                error : false
            }
        })
    }).catch(error => {
        dispatch({
            type : ActionDescriptor.ActionType,
            payload : {
                action : ActionDescriptor.ActionType,
                error : true,
                errorMessage : error
            }
        })
    })
}