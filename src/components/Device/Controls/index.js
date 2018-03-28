/* jshint esversion: 6 */
import React from 'react';

import { AddDeviceModal } from '../../Modals/Add';
//import { AddDeviceModal } from '../../Exports';
import { Card } from 'semantic-ui-react';

const AddDeviceControlPanel = () => (
    <Card fluid>
      <Card.Content>
        <Card.Header>Control Panel</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description><AddDeviceModal /></Card.Description>
      </Card.Content>
    </Card>
);

export default AddDeviceControlPanel;
