import React from 'react'
import { Form } from 'semantic-ui-react';

const PasswordInput = ({
    ...rest
}) => {
  return (
    <Form.Input
        icon='lock'
        iconPosition = 'left'
        placeholder='Password'
        name='password'
        type='password'
        {...rest}
    />
  )
}

export default PasswordInput;
