/*jshint esversion: 6*/
import React, { Component } from 'react';

//Component imports
import { LoginScreen } from '../../components/Exports/Exports';

//CSS import
import '../Master.css';
import './LoginScreen.css';

export default class Login extends Component {
    render() {
        return (
            <header className="page-body">
            <LoginScreen />
            </header>
        )
    }
}
