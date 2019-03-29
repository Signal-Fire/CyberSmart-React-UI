import React from 'react';
import { Menu } from 'semantic-ui-react';

import './controlPanelBar.css';

const Bar = ( { children }) => {
    return(
        <Menu 
        className = 'control-panel-bar'
        inverted
        size = 'small'>
            {children}
        </Menu>
    );
}

export default Bar;