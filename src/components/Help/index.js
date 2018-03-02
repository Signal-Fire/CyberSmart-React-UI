/* jshint esversion: 6*/
import React from 'react';
import { Tab } from 'semantic-ui-react';

import { InfoAccordian } from '../../components/Exports';


const panes = [
  { menuItem: 'Guide', render: () => <Tab.Pane attached={true}>Coming soon!</Tab.Pane> },
  { menuItem: 'FAQ', render: () => <Tab.Pane attached={true}>Coming soon!</Tab.Pane> },
  { menuItem: 'Contact us', render: () => <Tab.Pane attached={true}>CyberSmart Team</Tab.Pane> },
]

const HelpTabs = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default HelpTabs
