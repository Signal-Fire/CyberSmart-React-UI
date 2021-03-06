import React from 'react'
import { Menu, Grid } from 'semantic-ui-react';

import { AddDeviceModal, AddLocationModal, AddUserModal } from '../../Modals/Add';
import { Bar } from '../';

const Panel = ( { name } ) => {
    return (
        <Grid stackable columns = {1} divided = 'vertically'>
            <Grid.Column verticalAlign = 'middle'>
                <Bar>
                    <Menu.Item name = { name } />
                    <Menu.Menu position='right'>
                    { 
                        name === 'Locations' 
                        ? 
                            <AddLocationModal /> 
                        :
                            name === 'Devices' 
                            ?
                            <AddDeviceModal />
                            :
                            <AddUserModal />
                    }
                    </Menu.Menu>
                </Bar>         
            </Grid.Column>                        
        </Grid>              
    );
};

export default Panel;