import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';

const CreatedByLabel = ({
    user
}) => {
    return (
        <Label as = 'a' color = 'teal'>
            <Icon name = 'user' />
            <Label.Detail>{moment(user.signup_timestamp).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;