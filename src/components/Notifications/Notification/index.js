import React from 'react';
import { Feed } from 'semantic-ui-react';
import moment from 'moment';

const modify = (word, type) => {
    try {
        return (type === 'upper' ? 
            word.charAt(0).toUpperCase() 
            : 
            word.charAt(0).toLowerCase())
            + word.slice(1);
    } catch (ex) {
        return word;
    }
}

const iconSelector = (type) => {
    switch(type) {
        case 'Device':
            return 'mobile';
        case 'Location':
            return 'home';
        default:
            return 'alarm';
    }
}

const Notification = ({
    notification
}) => {  
    return(
        <Feed.Event
            icon ={iconSelector(notification.type)}
            author = 'me'
            date ={moment(notification.timestamp).format('dddd, HH:mm')}
            summary = {modify(notification.created_by_user, "upper") + ' ' + modify(notification.message, "lower")}>
        </Feed.Event>
    );
}

export default Notification;