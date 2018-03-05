/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Dropdown, Menu } from 'semantic-ui-react';
import { MenuIcon, MenuMessage, UserModal, HubModal } from '../Exports';

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  toggleVisibility() {
    this.props.toggleVisibility();
  }

  render() {
    return (
      <div>
      <Menu 
        inverted
        primary
        attached
        pointing
        borderless>
          <Menu.Item icon = 'sidebar' onClick = { this.toggleVisibility } />
          <div className="left logo">
            <div className= "item">
              <p>CyberSmart</p>
            </div>
          </div>
          <div className="right menu">
            <Dropdown item icon='announcement' pointing = 'top right'>
              <Dropdown.Menu>
                <MenuMessage message="You left x lights on this week!"/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item icon='settings' pointing = 'top right'>
              <Dropdown.Menu>
                <UserModal />
                <HubModal />
                <MenuIcon title = "Logout" icon = "sign out" onClick = {this.logout}/>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Menu>
      </div>
    )
  }
};
