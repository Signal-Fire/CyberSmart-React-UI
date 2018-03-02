/* jshint esversion: 6*/
import React, { Component } from 'react';
import {  Sidebar, Segment, Menu } from 'semantic-ui-react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import { SideBarItem } from '../Exports/Exports';
import { DevicePage, HomePage, RoomPage, HelpPage, UserManagementPage } from '../../pages/Exports/Exports';

export default class SideBar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Sidebar.Pushable as={ Segment }>
                        <Sidebar as={Menu} animation='scale down' 
                            direction='left' 
                            width='thin' 
                            visible={true}
                            icon='labeled' 
                            vertical 
                            inverted
                            >
                            <NavLink to="/"><SideBarItem icon = 'dashboard' title = 'Dashboard' /></NavLink>
                            <NavLink to="/devices"><SideBarItem icon = 'plug' title = 'Devices' /></NavLink>
                            <NavLink to="/rooms"><SideBarItem icon = 'home' title = 'Rooms' /></NavLink>
                            <NavLink to="/help"><SideBarItem icon = 'info' title = 'Help' /></NavLink>
                            <NavLink to="/user"><SideBarItem icon = 'user' title = 'Users' /></NavLink>
                            <NavLink to="/authentication"><SideBarItem icon = 'protect' title = 'Authentication' /></NavLink>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <div>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/devices" component={DevicePage} />
                                <Route exact path="/rooms" component={RoomPage} />
                                <Route exact path="/help" component={HelpPage} />
                                <Route exact path="/user" component={UserManagementPage} />
                                <Route exact path="/authentication" component={Authentication} />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        )
    }
}
