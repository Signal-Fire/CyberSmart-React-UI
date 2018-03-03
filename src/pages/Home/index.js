/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

//Custom components import
import {StatisticsGroup} from '../../components/Exports';
import {FluidChart} from '../../components/Exports';

export default class HomePage extends Component {
  render() {
    return (
      <header className = "page-body" >
      <StatisticsGroup />
        <FluidChart name = "Electricty Usage" color = "yellow"/>
      </header>
    )
  }
}
