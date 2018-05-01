import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

export default ({
    objects,
    ...rest
}) => {
    return (
        <Message 
            info
            compact
            style = {{
                width : '30%'
            }}
            {...rest}>
            <Icon name = 'exclamation' size = 'big'/>
            <Message.Header>Hey! You are yet to add any {objects}!</Message.Header>
            <Message.Content>
                <p>Not to worry, hit that + button on the Control Panel above me to add one!</p>
            </Message.Content>
        </Message>
    )
}