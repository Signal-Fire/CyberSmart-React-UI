import React from 'react';
import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as notifier from '../../../containers/Notifications/action';

const NotificationFeed = ({
    getNotifications
}) => {
    getNotifications();
    return(
        <Feed>
            <Feed.Event
                icon='pencil'
                date='Today'
                summary="You posted on your friend Stevie Feliciano's wall."
            />
            <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content
                    date='Today'
                    summary="You posted on your friend Stevie Feliciano's wall."
                />
            </Feed.Event>
        </Feed>
    );
}

NotificationFeed.PropTypes = {
    getNotifications : PropTypes.func
}

const mapStateToProps = state => ({
    notifications : state.logs.notifications
})

const mapDispatchToProps = dispatch => ({
    getNotifications : () => dispatch(notifier.getNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationFeed);