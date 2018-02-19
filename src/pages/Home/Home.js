/*jshint esversion: 6*/
import React, { Component } from 'react';

//CSS import
import '../Master.css';
import './HomePage.css';

//Custom components import
import { StatisticsWidget } from '../../components/Exports/Exports';

export default class HomePage extends Component {
    render() {
        return (
            <header className="page-body">
            <StatisticsWidget icon = 'power' label = 'wagwan'/>
            </header>
        )
    }
}
