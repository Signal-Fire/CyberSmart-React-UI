import React from 'react';
import { Route } from 'react-router-dom';
import { DevicePage, HomePage, RoomPage, HelpPage, UserManagementPage } from '../../../pages/Exports';

const Routes = () => {
    return (
        <div className = "sidebar-content">
            <Route exact path="/" component={HomePage}  />
            <Route exact path="/devices" component={DevicePage} />
            <Route exact path="/rooms" component={RoomPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/user" component={UserManagementPage} />
        </div>
    );
}

export default Routes;