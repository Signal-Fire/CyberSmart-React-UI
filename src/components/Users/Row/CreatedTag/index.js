import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import moment from 'moment';

<<<<<<< HEAD
const CreatedByLabel = ({
    signup_timestamp
}) => {
    return (
        <Label color = 'blue'>
            <Icon name = 'clock' />
=======
export default ({
    signup_timestamp
}) => {
    return (
        <Label as = 'a' color = 'teal'>
            <Icon name = 'user' />
>>>>>>> docker
            <Label.Detail>{moment(signup_timestamp).format('MMMM Do, HH:mm')}</Label.Detail>     
        </Label>
    );
}