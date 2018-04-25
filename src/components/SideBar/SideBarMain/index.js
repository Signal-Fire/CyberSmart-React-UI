import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

const SideBar = ({ children, ...rest, isVisible }) => {
    return (
        <Sidebar
            as = { Menu }
            animation = 'slide out'
            direction = 'left'
            width = 'thin'
            visible = { isVisible }
            icon = 'labeled'
            vertical
            inverted
        >
            {children}
        </Sidebar>
    );
}

export default SideBar;