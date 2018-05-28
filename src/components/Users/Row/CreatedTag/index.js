import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';

export default ({
    signup_timestamp
}) => {
    return (
        <Label as = 'a' color = 'teal'>
            <Icon name = 'user' />
            <Label.Detail>{moment(signup_timestamp).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}