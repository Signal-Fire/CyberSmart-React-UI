import React from 'react';
import { Label } from 'semantic-ui-react';

const StateTag = ({
    state
}) => {
    return (
        <Label color = {state === 0 ? 'red' : 'green'}>
            {state === 0 ? 'OFF' : 'ON'}
        </Label>
    );
}

export default StateTag;