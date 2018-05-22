import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import * as helpers from '../../../../helpers';

const CreatedByLabel = ({
    location
}) => {
    return (
        <Label color = 'teal'>
            <Icon name = 'home' />
            {helpers.capz(location.created_by_user)}
            <Label.Detail>{moment(location.created).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;