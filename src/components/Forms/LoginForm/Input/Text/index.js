import React from 'react';
import { Form } from 'semantic-ui-react';

const TextInput = ({ ...rest, }) => {
  return (
    <Form.Input
        fluid
        iconPosition='left'
        {...rest}
    />
  )
}

export default TextInput;
