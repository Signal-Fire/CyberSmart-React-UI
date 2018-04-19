import React from 'react';
import { Label } from 'semantic-ui-react';
import moment from 'moment';

const CreatedByLabel = ({
    name,
    date
}) => {
    return (
        <Label as = 'a' color = 'teal' image>
            {name}   
            <Label.Detail>{moment(date).format('dddd, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;