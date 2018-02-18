/* jshint esversion: 6*/
import React, { Component } from 'react';
import {  Sidebar, Segment, Menu } from 'semantic-ui-react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import { SideBarItem } from '../Exports/Exports';
import { DevicePage, HomePage, RoomPage, HelpPage } from '../../pages/Exports/Exports';

/**
 * Class uses combination of HashRouter - meaning the URL is appended to the window location
 * NavLink, meaning custom icons and information can be linked / url'd
 * Route. Leaving it as <Route path> means /#/ gets added, <Route exact path> means it goes direct to /
 * By embedding it in a div, it means each page gets rendered into the container, meaning SideBar and MenuBar
 * don't get re-rendered whenever a new page is loaded
 * <Route exact path = "/" component = {HomePage} />
 * means, when the URL is looking at "/", render the HomePage (../Pages/Home/Home.js) into the <div> tag encasing this route
 */
export default class SideBar extends Component {
    render() {
        return (   
            <HashRouter>         
                <div>                
                    <Sidebar.Pushable as={ Segment }>
                        <Sidebar as={Menu} animation='push' direction='left' width='thin' visible={this.props.visible}icon='labeled' vertical inverted>
                            <NavLink to="/"><SideBarItem icon = 'dashboard' title = 'Dashboard' /></NavLink>
                            <NavLink to="/devices"><SideBarItem icon = 'plug' title = 'Devices' /></NavLink>
                            <NavLink to="/rooms"><SideBarItem icon = 'home' title = 'Rooms' /></NavLink>
                            <NavLink to="/help"><SideBarItem icon = 'info' title = 'Help' /></NavLink>
                        </Sidebar>                        
                        <Sidebar.Pusher>
                            <div>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/devices" component={DevicePage} />
                                <Route exact path="/rooms" component={RoomPage} />
                                <Route exact path="/help" component={HelpPage} />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>   
                </div>       
            </HashRouter>  
        )
    }
}
