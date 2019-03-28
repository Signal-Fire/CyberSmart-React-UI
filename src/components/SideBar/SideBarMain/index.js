import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu } from 'semantic-ui-react';

const SideBar = ({ children, isOpen, ...rest }) => {
    return (
        <Sidebar
            as = { Menu }
            animation = 'slide out'
            direction = 'left'
            width = 'thin'
            visible = { isOpen }
            icon = 'labeled'
            vertical
            inverted
        >
            {children}
        </Sidebar>
    );
}

const mapStateToProps = state => ({
    isOpen : state.login.sidebarOpen
})

export default connect(mapStateToProps,null)(SideBar);