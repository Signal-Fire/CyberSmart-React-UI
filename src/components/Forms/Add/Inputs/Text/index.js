import React from 'react';
import { Form } from 'semantic-ui-react';

const TextInput = ({
    ...rest,
    type
}) => {

    const typeSelector = (type, text) => {
        return type + ' ' + text;
    }

    return (
        <Form.Input
            fluid
            label = {typeSelector(type, 'Name')}
            placeholder = {typeSelector(type, 'Name')}
            name = {type}
            {...rest}
        />
    );
}

export default TextInput;