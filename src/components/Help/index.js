/* jshint esversion: 6*/
import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'Setup', render: () => <Tab.Pane attached={true}>Put content here</Tab.Pane> },
  { menuItem: 'Usage', render: () => <Tab.Pane attached={true}>Put content here</Tab.Pane> },
  { menuItem: 'Navigating', render: () => <Tab.Pane attached={true}>Put Content Here</Tab.Pane> },
]

const HelpTabs = () => (
  <Tab menu={{ secondary: true }} panes={panes} />
)

export default HelpTabs