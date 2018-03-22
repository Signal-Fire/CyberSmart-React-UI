/*jshint esversion: 6*/
import React, { Component } from 'react';

import { APP_NAME, USER_COOKIE_IDENTIFIER } from '../../config';
import { Dropdown, Menu, Image, Container, Segment, Button, Icon } from 'semantic-ui-react';
import { MenuIcon, MenuMessage, UserModal, HubModal } from '../Exports';
import { HashRouter, Route, NavLink, Link } from 'react-router-dom';

export default class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  logout() {
    localStorage.removeItem(USER_COOKIE_IDENTIFIER);
    window.location.reload();
  }

  toggleVisibility() {
    this.props.toggleVisibility();
  }


  render() {

    return (
      <HashRouter>
      <Menu size='small'
            fixed='top'
            borderless
            pointing
            >

            <Menu.Item as='a' header>
         <Image
           size='mini'
           src='./assets/images/logo.png'
           style={{ marginRight: '1.5em' }}
         />
         CyberSmart
       </Menu.Item>

       <Menu.Item>
       <Button.Group>
            <Button animated='fade' basic to="/" as={ Link }>
              <Button.Content visible><Icon name='dashboard' /></Button.Content>
                <Button.Content hidden>
                  Home
                </Button.Content>
            </Button>

            <Button animated='fade' basic to="/devices" as={ Link }>
              <Button.Content visible><Icon name='block layout' /></Button.Content>
                <Button.Content hidden>
                  Devices
                </Button.Content>
            </Button>

            <Button animated='fade' basic to="/rooms" as={ Link }>
              <Button.Content visible><Icon name='home' /></Button.Content>
                <Button.Content hidden>
                  Rooms
                </Button.Content>
            </Button>

            <Button animated='fade' basic to="/user" as={ Link }>
              <Button.Content visible><Icon name='users' /></Button.Content>
                <Button.Content hidden>
                  Users
                </Button.Content>
            </Button>

            <Button animated='fade' basic to="/help" as={ Link }>
              <Button.Content visible><Icon name='info' /></Button.Content>
                <Button.Content hidden>
                Help
                </Button.Content>
            </Button>
            </Button.Group>
            </Menu.Item>


         <Menu.Menu position='right'>
           <Dropdown item text='Settings' Icon name='gamepad'>
             <Dropdown.Menu>
               <Dropdown.Item><HubModal /></Dropdown.Item>
               <Dropdown.Item><UserModal /></Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

           <Menu.Item>
           <Menu.Item>
           <Button animated='fade' basic onClick = {this.logout}>
             <Button.Content visible>Log out</Button.Content>
               <Button.Content hidden>
                 <Icon name='lock' icon='settings' />
               </Button.Content>
           </Button>
           </Menu.Item>
           </Menu.Item>
         </Menu.Menu>
       </Menu>
       </HashRouter>
    )
  }
};
