import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Bar, Logo, Notifications, Settings } from '../';

const MainMenu = ( { toggleVisibility } ) => {
    return (
        <Bar>
          <Menu.Item 
            icon = 'sidebar' 
            onClick = { toggleVisibility } />         
          <div className="left logo">
            <Logo />
          </div>
          <div className="right menu">
            <Notifications />
            <Settings />
          </div>
        </Bar>
    );
};

export default MainMenu;