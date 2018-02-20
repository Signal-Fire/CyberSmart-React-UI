/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

//Custom components import
import {StatisticsGroup} from '../../components/Exports/Exports';
import {FluidChart} from '../../components/Exports/Exports';

export default class HomePage extends Component {
  render() {
    return (
      <header className = "page-body" >
      <StatisticsGroup />
        <FluidChart name = "Chart 1" color = "red"/>
        <FluidChart name = "Chart 2" color = "orange"/>
        <FluidChart name = "Chart 3" color = "green"/>
      </header>
    )
  }
}
