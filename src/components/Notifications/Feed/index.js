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
            notifArray.push(
                <Notification notification = {notif} />
            );            
        })

        return notifArray.reverse();
    }

    return(
        <Feed>
            {
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