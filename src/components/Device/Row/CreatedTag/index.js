import React from 'react';
import { Label } from 'semantic-ui-react';

const CreatedByLabel = ({
    name
}) => {
    return (
        <Label as = 'a' color = 'teal' image>
            {name}        
        </Label>
    );
}

export default CreatedByLabel;