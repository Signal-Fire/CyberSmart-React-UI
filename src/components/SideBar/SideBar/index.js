/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';

import { SideBarItems, Routes, MainSidebar, SideBarPusher } from '../';

import './styles.css';

export default class SideBar extends Component {
    render() {
        return (
            <HashRouter>
                <div className = "sidebar-container">
                    <SideBarPusher>
                        <MainSidebar isVisible = { this.props.visible }>
                            <SideBarItems toggleVisibility = { this.props.toggleVisibility } />
                        </MainSidebar>
                        <Sidebar.Pusher>
                            <Routes />
                        </Sidebar.Pusher>
                    </SideBarPusher>
                </div>
            </HashRouter>
        )
    }
}
