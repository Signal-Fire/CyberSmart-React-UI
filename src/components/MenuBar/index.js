/*jshint esversion: 6*/
import React, { Component } from 'react';

import { APP_NAME, USER_COOKIE_IDENTIFIER } from '../../config';
import { Dropdown, Menu, Image, Container, Segment, Button, Icon } from 'semantic-ui-react';
import { MenuIcon, MenuMessage, UserModal, HubModal } from '../Exports';

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
      <Menu size='small'
            fixed='top'
            borderless
            pointing
            >

       <Menu.Item>
       <Button.Group>
            <Button animated='fade' basic>
              <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                  <Icon name='home' />
                </Button.Content>
            </Button>

            <Button animated='fade' basic>
              <Button.Content visible>Devices</Button.Content>
                <Button.Content hidden>
                  <Icon name='chart' />
                </Button.Content>
            </Button>

            <Button animated='fade' basic>
              <Button.Content visible>Rooms</Button.Content>
                <Button.Content hidden>
                  <Icon name='block device' />
                </Button.Content>
            </Button>

            <Button animated='fade' basic>
              <Button.Content visible>Users</Button.Content>
                <Button.Content hidden>
                  <Icon name='user' />
                </Button.Content>
            </Button>

            <Button animated='fade' basic>
              <Button.Content visible>Help</Button.Content>
                <Button.Content hidden>
                  <Icon name='info' />
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
           <Button animated='fade' basic>
             <Button.Content visible>Log out</Button.Content>
               <Button.Content hidden>
                 <Icon name='lock' icon='settings' />
               </Button.Content>
           </Button>
           </Menu.Item>
           </Menu.Item>
         </Menu.Menu>
       </Menu>
    )
  }
};
