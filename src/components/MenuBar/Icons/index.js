import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const MenuIcon = ({ icon, title, onClick }) => {
    return (
        <Dropdown.Item 
                icon = {icon} 
                text = {title} 
                onClick = {onClick}
            />
    );
}

export default MenuIcon;
