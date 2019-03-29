import React from 'react';
import { Menu } from 'semantic-ui-react';
import './barCss.css';

const Bar = ( { children, ...rest } ) => {
    return (
        <Menu
            className = 'bar-styles'
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