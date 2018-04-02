/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import { SideBarItem } from '../Exports';
import { DevicePage, HomePage, RoomPage, HelpPage, UserManagementPage } from '../../pages/Exports';

import './styles.css';

export default class SideBar extends Component {
    render() {
        return (
            <HashRouter>
                <div className = "sidebar-container">
                    <Sidebar.Pushable 
                        as={ Segment }
                        style = {{ 
                            borderRadius: 0,
                            borderWidth: 0
                         }} >
                        <Sidebar as={Menu} animation='overlay' 
                            direction='left'
                            width='thin'
                            defaultVisible = {true}
                            visible={this.props.visible}
                            icon='labeled'
                            vertical
                            inverted
                            >
                            <NavLink to="/"  onClick = {this.props.toggleVisibility}><SideBarItem icon = 'dashboard' title = 'Dashboard' /></NavLink>
                            <NavLink to="/devices"><SideBarItem icon = 'plug' title = 'Devices' /></NavLink>
                            <NavLink to="/rooms"><SideBarItem icon = 'home' title = 'Rooms' /></NavLink>
                            <NavLink to="/user"><SideBarItem icon = 'user' title = 'Users' /></NavLink>
                            <NavLink to="/help"><SideBarItem icon = 'info' title = 'Help' /></NavLink>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <div className = "sidebar-content">
                                <Route exact path="/" component={HomePage}  />
                                <Route exact path="/devices" component={DevicePage} />
                                <Route exact path="/rooms" component={RoomPage} />
                                <Route exact path="/help" component={HelpPage} />
                                <Route exact path="/user" component={UserManagementPage} />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        )
    }
}
