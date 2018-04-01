/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

import { Segment, Grid } from 'semantic-ui-react';

//Custom components import
import {StatisticsGroup} from '../../components/Exports';
import {FluidChart} from '../../components/Exports';

export default class HomePage extends Component {
  render() {
    return (
      <Grid rows={2}>
      <Segment>
      <header className = "page-body" >
      <Grid.Row>
      <StatisticsGroup />
      </Grid.Row>
      <Grid.Row>
      <FluidChart name = "Electricty Usage" color = "black"/>
      </Grid.Row>
      </header>
      </Segment>
      </Grid>
    )
  }
}
