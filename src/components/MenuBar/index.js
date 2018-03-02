/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react';
import { MenuIcon, MenuMessage } from '../Exports/Exports';

export default class MenuBar extends Component {
  render() {
    return (
      <div className="ui inverted primary attached pointing menu">
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
              <MenuIcon title = "User Settings" icon = "user"/>
              <MenuIcon title = "Hub Configuration" icon = "settings"/>
              <MenuIcon title = "Logout" icon = "sign out" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  }
};
