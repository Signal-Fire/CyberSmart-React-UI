import React from 'react'
import { Label } from 'semantic-ui-react';

const ErrorPopup = ({
    text
}) => {
  return (
    <Label basic color='red' pointing='below'>Please enter a {text}</Label>
  )
}

export default ErrorPopup;
