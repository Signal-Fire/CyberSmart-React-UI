import React from 'react';
import { Route } from 'react-router-dom';
import { DevicePage, HomePage, RoomPage, HelpPage, UserManagementPage } from '../../../pages/Exports';

const SideBarContent = {
    height : '100%'
}

const Routes = () => {
    return (
        <div style = { SideBarContent }>
            <Route exact path="/" component={HomePage}  />
            <Route exact path="/devices" component={DevicePage} />
            <Route exact path="/rooms" component={RoomPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/user" component={UserManagementPage} />
        </div>
    );
}

export default Routes;