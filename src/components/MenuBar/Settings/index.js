import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { MenuIcon } from '../../Exports';
import { UserSettingsModal, HubSettingsModal } from '../../Modals';
import { USER_COOKIE_IDENTIFIER } from '../../../config';

const logout = () => {
    if (window.localStorage) 
    localStorage.removeItem(USER_COOKIE_IDENTIFIER);
    
    window.location.reload();
};

const SettingsDropdown = () => {
    return (
        <Dropdown 
            item 
            icon='settings' 
            pointing = 'top right'
        >
            <Dropdown.Menu>
            <UserSettingsModal />
            <HubSettingsModal />
            <MenuIcon 
                title = "Logout" 
                icon = "sign out" 
                onClick = {logout}
            />
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default SettingsDropdown;