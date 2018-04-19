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
            return "";
        }
    }

    return(
        <Feed.Event>
            <Feed.Label icon ={notification.icon} />
            <Feed.Content>
                <Feed.Summary>
                    {capz(notification.created_by_user)}
                    <Feed.Date>{moment(notification.timestamp).format('dddd, hh:mm')}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    {capz(notification.message)} 
                </Feed.Extra>
            </Feed.Content>
        </Feed.Event>
    );
}

export default Notification;