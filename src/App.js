/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import { Scrollbars } from 'react-custom-scrollbars';

//Custom imports
import { MenuBar, SideBarItems } from './components/Exports/Exports';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
      this.setState({ visible: !this.state.visible })
  }

  render() {
    return (     
        <div className = "App">        
            <MenuBar toggleVisibility = {this.toggleVisibility} />   
            <Scrollbars 
              autoHeight
              autoHeightMax={1000}>       
                <Sidebar.Pushable as={ Segment }>        
                  <Sidebar as={Menu} animation='slide out' direction='left' width='wide' visible={this.state.visible} icon='labeled' vertical inverted>            
                    <SideBarItems />          
                  </Sidebar>
                  <Sidebar.Pusher>             
                        <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          <h1 className="App-title">Welcome to React</h1>
                        </header>
                  </Sidebar.Pusher>
                </Sidebar.Pushable> 
            </Scrollbars>     
        </div> 
      
    );
  }
}

export default App;
