import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Message } from 'semantic-ui-react';
import { NotificationFeed } from '../../Notifications';
import { getNotifications } from '../../../containers/Notifications/action';

const Announcements = ({
    getNotifications
}) => {
    return (
        <Dropdown 
            item 
            icon='announcement' 
            pointing = 'top right'
            onClick = { () => getNotifications() }
        >                   
            <Dropdown.Menu>                                
                <Message>            
                    <NotificationFeed />                        
                </Message>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const mapDispatchToProps = dispatch => ({
    getNotifications : () => { dispatch(getNotifications()) }
})

export default connect(null, mapDispatchToProps)(Announcements);