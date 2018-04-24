import React from 'react';

import { Button } from 'semantic-ui-react';

const SubmitButton = ({
     ...rest 
}) => {
    return (
        <Button
            positive 
            icon='checkmark' 
            labelPosition='right' 
            content="Save" 
        />
    );
}

export default SubmitButton;