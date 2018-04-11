/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

//Custom components import
import { DeviceStats } from '../../components/Dashlets';
import { PowerChart } from '../../components/Charts';

export default class HomePage extends Component {
  render() {
    return (
      <header className = "page-body" >
        <DeviceStats />
        <PowerChart 
          header = "Electricty Usage"/>
      </header>
    )
  }
}
