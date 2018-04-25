import React from 'react'
import { Label, Icon } from 'semantic-ui-react';

const Delete = ({
  id
}) => {
  return (
    <Label 
      color = 'red' 
      as = 'a' 
      onClick = {() => console.log(id)}>
        Remove
        <Icon name = 'close' />
    </Label>
  )
}

export default Delete;
