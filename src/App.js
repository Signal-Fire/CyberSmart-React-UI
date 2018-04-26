import React from 'react';
import { connect } from 'react-redux';
import { SideBar } from './components/SideBar';
import { MainMenu } from './components/MenuBar';
import { LoginModal } from './components/Modals';

import './App.css';

const App = ({
    token,
    sidebarOpen,
    operateSidebar
}) => {
    return (       
        <div className = "App">
            <MainMenu />
            <SideBar />  
            <LoginModal open = {token === null}/> 
        </div>
    );
}

const mapStateToProps = state => ({
    token : state.login.token,
    sidebarVisible : state.login.sidebarOpen
})

export default connect(mapStateToProps, null)(App);
