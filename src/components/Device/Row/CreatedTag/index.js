import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import * as helpers from '../../../../helpers';

const CreatedByLabel = ({
    device
}) => {
    return (
        <Label color = 'teal'>
            <Icon name = 'user' />
            {helpers.capz(device.created_by_user)}
            <Label.Detail>{moment(device.date_added).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;