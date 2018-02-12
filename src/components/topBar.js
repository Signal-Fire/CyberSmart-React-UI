/*jshint esversion: 6*/
import React, { Component } from 'react';

//import { SearchBar } from './exports';

export default class TopBar extends Component {
    render() {
        return (            
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">CyberSmart | Eco-Friendly Smart Home</a>
                    </div>
                </div>
            </nav>
        )
    }
}
