/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }
    
    toggleVisibility() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <Sidebar as={Menu} animation='slide out' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
              <Menu.Item name='home'>
              <Icon name='home' />
              Home
              </Menu.Item>
              <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
              </Menu.Item>
              <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
              </Menu.Item>
            </Sidebar>
        )
    }
}
