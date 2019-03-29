import React from 'react';
import { Tab, Icon } from 'semantic-ui-react';

import './faqPanes.css';

const panes = [
    { menuItem: 'How do I add a Room?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to rooms. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'How do I add a Device?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to devices. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'How do I add a User?', render: () => <Tab.Pane>Click on the sidebar on the top left of the page, move your mouse down to users. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'What is a Device?', render: () => <Tab.Pane>A Device is one of the CyberSmart plugs, with one of your appliances plugged in! Whether it be a lamp or phone charger!</Tab.Pane> },
    { menuItem: 'How can I change my User Settings', render: () => <Tab.Pane>Head up to the settings cog on the top right of the page, give it a click and select User Settings, you can now change your name</Tab.Pane> },
    { menuItem: 'How can I view my Hub Settings', render: () => <Tab.Pane>Head up to the settings cog on the top right of the page, give it a click and select Hub Settings, from here you can view and manage the hub</Tab.Pane> },
  ]

  const mobilePanes = [
    { menuItem: 'Rooms', render: () => <Tab.Pane attached = {false}>Click on the sidebar on the top left of the page, move your mouse down to rooms. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },
    { menuItem: 'Devices', render: () => <Tab.Pane attached = {false}>Click on the sidebar on the top left of the page, move your mouse down to devices. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away! <hr /> A Device is one of the CyberSmart plugs, with one of your appliances plugged in! Whether it be a lamp or phone charger!</Tab.Pane> },
    { menuItem: 'Users', render: () => <Tab.Pane attached = {false}>Click on the sidebar on the top left of the page, move your mouse down to users. Once there, find the { <Icon name = 'plus' /> } on the top right and click it. Add away!</Tab.Pane> },    
    { menuItem: 'User Settings', render: () => <Tab.Pane attached = {false}>Head up to the settings cog on the top right of the page, give it a click and select User Settings, you can now change your name</Tab.Pane> },
    { menuItem: 'Hub Settings', render: () => <Tab.Pane attached = {false}>Head up to the settings cog on the top right of the page, give it a click and select Hub Settings, from here you can view and manage the hub</Tab.Pane> },
  ]

export default class FAQPane extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      
      render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        // the rest is the same...
      
        if (isMobile) {
          return (
            <Tab menu={{ fluid: true, vertical: true, tabular: 'right', text: true }} panes={mobilePanes} />  
          );
        } else {
          return (
            <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />  
          );
        }
      }
}
