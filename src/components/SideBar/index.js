/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import { HashRouter, Route } from 'react-router-dom';

import { SideBarItems, Routes } from './SideBarManager';
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
                            <SideBarItems toggleVisibility = { this.props.toggleVisibility } />
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Routes />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        )
    }
}
