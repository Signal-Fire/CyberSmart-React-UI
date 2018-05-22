import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';

const CreatedByLabel = ({
    signup_timestamp
}) => {
    return (
        <Label color = 'blue'>
            <Icon name = 'clock' />
            <Label.Detail>{moment(signup_timestamp).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;