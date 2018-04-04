import React from 'react';
import { Menu } from 'semantic-ui-react';

const Bar = ( { children, ...rest } ) => {
    return (
        <Menu
            inverted
            attached
            pointing
            borderless
            {...rest}
        >
            {children}
        </Menu>
    );
}

export default Bar;