import React from 'react';
import { Menu } from 'semantic-ui-react';

const Bar = ( { children }) => {
    return(
        <Menu 
        inverted
        size = 'small'>
            {children}
        </Menu>
    );
}

export default Bar;