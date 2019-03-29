import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import * as helpers from '../../../../helpers';
import moment from 'moment';

export default ({
    device
}) => {
    return (
        <Label color = 'teal'>
            <Icon name = 'user' />
            {helpers.capz(device.created_by_user)}
            <Label.Detail>{moment(device.created_timestamp).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}