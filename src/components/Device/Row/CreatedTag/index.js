import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import * as helpers from '../../../../helpers';

const CreatedByLabel = ({
    name,
    date
}) => {
    return (
        <Label as = 'a' color = 'teal'>
            <Icon name = 'user' />
            {helpers.capz(name)}
            <Label.Detail>{moment(date).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;