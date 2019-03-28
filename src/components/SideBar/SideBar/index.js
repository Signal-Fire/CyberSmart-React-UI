import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';
import { SideBarItems, Routes, MainSidebar, SideBarPusher } from '../';

const SideBarContainer = {
    height : '100%'
}

const SideBar = ({ isOpen }) => {
    return (
        <HashRouter>
            <div style = { SideBarContainer }>
                <SideBarPusher>
                    <MainSidebar>
                        <SideBarItems />
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
