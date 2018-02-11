/*jshint esversion: 6*/
import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome</h1>
            </header>
        )
    }
}
