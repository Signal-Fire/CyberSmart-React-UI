/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';

import { SideBarItems, Routes, MainSidebar } from './SideBarManager';

import './styles.css';

export default class SideBar extends Component {
    render() {
        const SidebarStyle = {
            borderRadius : 0,
            borderWidth : 0
        };

        return (
            <HashRouter>
                <div className = "sidebar-container">
                    <Sidebar.Pushable 
                        as={ Segment }
                        style = { SidebarStyle } >
                        <MainSidebar isVisible = { this.props.visible }>
                            <SideBarItems toggleVisibility = { this.props.toggleVisibility } />
                        </MainSidebar>
                        <Sidebar.Pusher>
                            <Routes />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        )
    }
}
