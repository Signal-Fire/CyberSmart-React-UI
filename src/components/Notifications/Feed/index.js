import React from 'react';
import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Notification } from '../';

const NotificationFeed = ({
    notifications    
}) => {
    const createList = () => {
        let notifArray = [];

        notifications.forEach(notif => {   
            notif.icon = 'alarm';         
            notifArray.push(
                <Notification 
                    notification = {notif} 
                    key = {notif._id}/>
            );            
        })

        return notifArray;
    }

    const errorMessage = {
        icon : 'exclamation',
        type : 'error',
        created_by_user : 'System',
        message : 'Issue with Notifications'
    }

    const noNotifications = {
        icon : 'smile',
        type : 'none',
        message : 'No Notifications'
    }

    return(
        <Feed>
            {
                notifications === null ?
                <Notification 
                    notification = {errorMessage}/>
                :
                notifications.length < 1 ?
                <Notification
                    notification = {noNotifications} />
                :
                createList()
            }
        </Feed>
    );
}

NotificationFeed.propTypes = {
    notifications : PropTypes.arrayOf(Object)
}

const mapStateToProps = state => ({
    notifications : state.logs.notifications
})

export default connect(mapStateToProps, null)(NotificationFeed);