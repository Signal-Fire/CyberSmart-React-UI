/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { MenuIcon } from '../Exports/Exports';

export default class componentName extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <div className="ui secondary menu">      
        <div className="left logo">
          <div className= "item"> 
            <p>Logo </p>
          </div>
        </div>
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>        
        <div className="right menu">   
          <Dropdown item icon='announcement' simple>
            <Dropdown.Menu>
              
              
            </Dropdown.Menu>
          </Dropdown>            
          <div className= "ui dropdown icon item">
            <i className= "announcement icon" />
          </div>
          <div className= "ui dropdown icon item">
            <i className= "settings icon" />
              <div className="ui vertical menu">
                <div className = "item">User Settings</div>
                <div className = "item">Hub Configuration</div>
                <div className = "item">Logout</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
};
