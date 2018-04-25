/* jshint esversion: 6*/
import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';

import { SideBarItems, Routes, MainSidebar, SideBarPusher } from '../';

import './styles.css';

const SideBar = ({ visible, toggleVisibility }) => {
    return (
        <HashRouter>
            <div className = "sidebar-container">
                <SideBarPusher>
                    <MainSidebar isVisible = { visible }>
                        <SideBarItems toggleVisibility = { toggleVisibility } />
                    </MainSidebar>
                    <Sidebar.Pusher>
                        <Routes />
                    </Sidebar.Pusher>
                </SideBarPusher>
            </div>
        </HashRouter>
    );
}

export default SideBar;
