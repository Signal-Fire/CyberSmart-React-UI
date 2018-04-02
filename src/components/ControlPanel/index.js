/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import { AddLocationModal, AddDeviceModal } from '../Modals/Add';

const ControlPanel = ( { name }) => {
  return (

  );
}

export default ControlPanel;

export default class ControlPanel extends Component {
  render() {
    return (
      <Menu 
        inverted
        size = 'small'>
          <Menu.Item name = { this.props.name } />
          <Menu.Menu position='right'>
            {this.props.name === 'Locations' ? <AddLocationModal /> : <AddDeviceModal />}
          </Menu.Menu>
      </Menu> 
    );
  }
}
