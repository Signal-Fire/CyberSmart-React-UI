/*jshint esversion: 6*/
import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    return (
      <div class="ui secondary  menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Messages
        </a>
        <a class="item">
          Friends
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    )
  }
};
