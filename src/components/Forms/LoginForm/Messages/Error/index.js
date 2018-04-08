import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = ({
    message,
    hidden
}) => {
    return(
        <Message 
            hidden={hidden} 
            color='red'>
            {message}
        </Message>
    );
}

module.exports = ErrorMessage;
