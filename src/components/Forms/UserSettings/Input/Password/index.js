import React from 'react';
import { Form } from 'semantic-ui-react';

const PasswordInput = ({
    name,
    ...rest
}) => {
    return(
        <Form.Input
        fluid
            type = 'password'
            label = { name }
            placeholder = { name }
            name = { name.replace(' ', '').toLowerCase() }
            { ...rest }
        />
    );
}

export default PasswordInput;