import React from 'react';
import { Feed } from 'semantic-ui-react';
import moment from 'moment';

const Notification = ({
    notification
}) => {
    const capz = (word) => {
        try {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } catch (ex) {
            return word;
        }
    }

    const lower = (word) => {
        try {
            return word.charAt(0).toLowerCase() + word.slice(1);
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

    return(
        <Feed.Event
            icon ={iconSelector(notification.type)}
            author = 'me'
            date ={moment(notification.timestamp).format('dddd, HH:mm')}
            summary = {capz(notification.created_by_user) + ' ' + lower(notification.message)}>
        </Feed.Event>
    );
}

export default Notification;