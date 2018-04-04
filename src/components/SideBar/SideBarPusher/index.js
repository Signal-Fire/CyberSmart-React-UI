import React from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';

const SidebarStyle = {
    borderRadius : 0,
    borderWidth : 0
};

const SideBarPusher = ({ children, ...rest }) => {
    return (
        <Sidebar.Pushable 
            as={ Segment }
            style = { SidebarStyle } 
        >
            {children}
        </Sidebar.Pushable>
    );
}

export default SideBarPusher;
