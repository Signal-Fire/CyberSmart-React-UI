/* jshint esversion: 6*/
import React, { Component } from 'react';

import { LoginModal } from './components/Exports';

//Custom imports
import { MenuBar, CustomSideBar } from './components/Exports';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
      this.setState({ visible: !this.state.visible });
  }

  getSession() {
    return localStorage.getItem("token") !== null;
  } 

  render() {   
      return (       
          <div className = "App">
              <MenuBar toggleVisibility = {this.toggleVisibility} />
              <CustomSideBar visible = {this.state.visible}/>  
              <LoginModal open = {!this.getSession()}/> 
          </div>

      );
  }
}  

export default App;
