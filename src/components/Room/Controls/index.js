/* jshint esversion: 6 */
import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { API_LOCATIONS_URL } from '../../../config';

import { AddLocationModal } from '../../Modals/Add';

const LocationControlPanel = () => (
    <Menu inverted>
          <Menu.Item name='home' />
          <Menu.Menu position='right'>
            <Menu.Item>
              
            </Menu.Item>
          </Menu.Menu>
    </Menu>
    
);

export default LocationControlPanel;
