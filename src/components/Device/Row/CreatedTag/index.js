import React from 'react';
import { Label } from 'semantic-ui-react';
import moment from 'moment';

const capz = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}

const CreatedByLabel = ({
    name,
    date
}) => {
    return (
        <Label as = 'a' color = 'teal' image>
            {capz(name)}   
            <Label.Detail>{moment(date).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}

export default CreatedByLabel;