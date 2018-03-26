/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

import { Dropdown, Menu, Image, Responsive, Container, Segment, Button, Icon } from 'semantic-ui-react';

//Custom components import
import {StatisticsGroup} from '../../components/Exports';
import {FluidChart} from '../../components/Exports';

export default class HomePage extends Component {
  render() {
    return (
      <Segment color='teal' inverted tertiary style={{ minHeight: 600, padding: '1em 0em' }}>
      <header className = "page-body" >
      <StatisticsGroup />
      <FluidChart name = "Electricty Usage" color = "black"/>
      </header>
      </Segment>
    )
  }
}
