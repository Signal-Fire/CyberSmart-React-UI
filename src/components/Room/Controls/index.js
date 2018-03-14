/* jshint esversion: 6 */
import React from 'react';

import LocationControl from '../AddModal';
import { Card } from 'semantic-ui-react';

const LocationControlPanel = () => (
    <Card fluid>
      <Card.Content>
        <Card.Header>Control Panel</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description><LocationControl /></Card.Description>
      </Card.Content>
    </Card>
);

export default LocationControlPanel;
