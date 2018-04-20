import React from 'react'
import { Button } from 'semantic-ui-react';

const SubmitButton = ({
    ...rest
}) => {
  return (
    <Button 
        positive 
        icon ='home' 
        labelPosition='right' 
        content="Login"
        type='submit'
        {...rest}
    />     
  )
}

export default SubmitButton;