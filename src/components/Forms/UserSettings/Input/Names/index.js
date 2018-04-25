import React from 'react';
import { Form } from 'semantic-ui-react';

const NameInput = ({
    name,
    ...rest
}) => {
    return (
        <Form.Input
            label = { name }
            placeholder = { name } 
            type = 'text'
            name = { name.replace(' ', '_').toLowerCase() }
            { ...rest }            
        />
    );
}

export default NameInput;