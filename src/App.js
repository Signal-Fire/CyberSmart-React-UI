/* jshint esversion: 6*/
import React, { Component } from 'react';

//Custom imports
import { MenuBar, CustomSideBar } from './components/Exports';

//Modals
import { LoginModal } from './components/Modals';

//Config
import { USER_COOKIE_IDENTIFIER } from './config';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
      this.setState({ visible: !this.state.visible });
  }

  getSession() {
        return window.localStorage ? localStorage.getItem(USER_COOKIE_IDENTIFIER) === null : null;
  } 

  render() {   
      return (       
          <div className = "App">
              <MenuBar toggleVisibility = {this.toggleVisibility} />
              <CustomSideBar visible = {this.state.visible} toggleVisibility = {this.toggleVisibility} />  
              <LoginModal open = {this.getSession()}/> 
          </div>
      );
  }
}  

export default App;
