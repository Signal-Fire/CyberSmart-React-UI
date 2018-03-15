/*jshint esversion: 6*/
import React, { Component } from 'react';

//Component imports
import { HelpTabs } from '../../components/Exports';

//CSS import
import '../Master.css';
import './HelpPage.css';

export default class HelpPage extends Component {
    render() {
        return (
            <header className="page-body">
                <HelpTabs />
            </header>
        )
    }
}
