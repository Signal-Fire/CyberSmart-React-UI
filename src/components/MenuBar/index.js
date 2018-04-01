import React, { Component } from "react";

import { MenuIcon, UserModal, HubModal } from '../Exports';

import { HashRouter, Link } from 'react-router-dom';
import {  Container, Icon, Image, Menu, Sidebar, Responsive, Button, Dropdown } from "semantic-ui-react";

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible
}) => (
  <HashRouter>
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation='left slide along'
      direction='left'
      width='large'
      visible={visible}
    >
    <Button.Group pointing='top left'>
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

           <Button animated='fade' basic to="/help" as={ Link }>
             <Button.Content visible><Icon name='info' /></Button.Content>
               <Button.Content hidden>
                 Help
               </Button.Content>
             </Button>
    </Button.Group>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
    >
    <Menu size='tiny'
              fixed='top'
              borderless
              pointing
              attached
              >
        <Menu.Item>
          <Image size="mini" src="assets/images/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position='right'>
         <Dropdown item text='Settings'>
           <Dropdown.Menu>
           <UserModal />
           <HubModal />
           <MenuIcon title = "Logout" icon = "sign out" onClick = {this.logout}/>
           </Dropdown.Menu>
         </Dropdown>
         </Menu.Menu>
      </Menu>
      {children}
      </Sidebar.Pusher>
  </Sidebar.Pushable>
  </HashRouter>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <HashRouter>
  <Menu size='tiny'
            fixed='top'
            borderless
            pointing
            >

    <Menu.Item>
      <Image size="mini" src="assets/images/logo.png" />
          CyberSmart
    </Menu.Item>

<Menu.Item>
 <Button.Group pointing='top left'>
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

        <Button animated='fade' basic to="/help" as={ Link }>
          <Button.Content visible><Icon name='info' /></Button.Content>
            <Button.Content hidden>
              Help
            </Button.Content>
          </Button>
 </Button.Group>
</Menu.Item>

          <Dropdown item icon='settings' pointing = 'top right'>
            <Dropdown.Menu>
              <UserModal />
              <HubModal />
              <MenuIcon title = "Logout" icon = "sign out" onClick = {this.logout}/>
            </Dropdown.Menu>
          </Dropdown>
     </Menu>
  </HashRouter>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "4.5em" }}>{children}</Container>
);

export default class MenuBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
