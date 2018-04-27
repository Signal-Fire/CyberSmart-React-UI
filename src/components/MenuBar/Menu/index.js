import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Bar, Logo, Notifications, Settings } from '../';
import { operateSidebar } from '../../../containers/Login/action'

const MainMenu = ( { 
  operateSidebar
 } ) => {
    return (
        <Bar>
          <Menu.Item 
            icon = 'sidebar' 
            onClick = { () => operateSidebar() } />         
          <div className="left logo">
            <Logo />
          </div>
          <div className="right menu">
            <Notifications />
            <Settings />
          </div>
        </Bar>
    );
};

const mapDispatchToProps = dispatch => ({
  operateSidebar : () => { dispatch(operateSidebar()) }
})

export default connect(null, mapDispatchToProps)(MainMenu);