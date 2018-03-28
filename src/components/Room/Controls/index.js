/* jshint esversion: 6 */
import React from 'react';

import { AddLocationModal } from '../../Modals/Add';
import { Card } from 'semantic-ui-react';

const LocationControlPanel = () => (
    <Card fluid>
      <Card.Content>
        <Card.Header>Control Panel</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description><AddLocationModal /></Card.Description>
      </Card.Content>
    </Card>
);

export default LocationControlPanel;
