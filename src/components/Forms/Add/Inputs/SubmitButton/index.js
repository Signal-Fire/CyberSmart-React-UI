import React from 'react';
import { Button } from 'semantic-ui-react';

const SubmitButton = ({
    handleSubmit,
    name
}) => {
    return(
        <Button
            positive
            type = 'submit'
            icon = 'checkmark'
            labelPosition = 'right'
            content = {name}
            onClick = {handleSubmit}
            name = {name.toLowerCase()}
        />
    );
}

export default SubmitButton;