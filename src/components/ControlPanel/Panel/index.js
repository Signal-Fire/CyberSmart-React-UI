import React from 'react'
import { Menu } from 'semantic-ui-react';

import { AddDeviceModal, AddLocationModal } from '../../Modals/Add';
import { Bar } from '../';

const Panel = ( { name } ) => {
    return (
        <Bar>
            <Menu.Item name = { name } />
            <Menu.Menu position='right'>
            { 
                name === 'Locations' 
                ? 
                    <AddLocationModal /> 
                :
                    <AddDeviceModal />
            }
            </Menu.Menu>
        </Bar>
    );
};

export default Panel;