/*jshint esversion: 6*/
import React, {
  Component
} from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

//Custom components import
import {
  StatisticsGroup
} from '../../components/Exports/Exports';

export default class HomePage extends Component {
  render() {
    return ( 
      <header className = "page-body" >
        <StatisticsGroup icon = 'power' label = 'wagwan' />
      </header>
    )
  }
}
