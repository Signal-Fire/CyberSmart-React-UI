import React from 'react';
import { Tab, Icon } from 'semantic-ui-react';

const panes = [
    { menuItem: 'How do I add a Room?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to rooms. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'How do I add a Device?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to devices. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'How do I add a User?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to users. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'What is a Device?', render: () => <Tab.Pane>A Device is one of the CyberSmart plugs, with one of your appliances plugged in! Whether it be a lamp or phone charger!</Tab.Pane> },
    { menuItem: 'How can I change my User Settings', render: () => <Tab.Pane>Head up to the settings cog on the top right of the page, give it a click and select User Settings, you can now change your name</Tab.Pane> },
    { menuItem: 'How can I view my Hub Settings', render: () => <Tab.Pane>Head up to the settings cog on the top right of the page, give it a click and select Hub Settings, from here you can view and manage the hub</Tab.Pane> },
  ]

export default () => {
    return (
        <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />        
    );
}
