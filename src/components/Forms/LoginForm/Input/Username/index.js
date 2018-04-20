import React from 'react';
import { Form } from 'semantic-ui-react';

const UsernameField = ({
    ...rest
}) => {
  return (
    <Form.Input
        fluid
        iconPosition='left'
        icon='user'
        name='username'
        placeholder='Username'
        type = 'text'
        {...rest}
    />
  )
};

export default UsernameField;
