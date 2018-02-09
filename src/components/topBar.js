/*jshint esversion: 6*/
import React, { Component } from 'react';

//import { SearchBar } from './exports';

export default class TopBar extends Component {
    render() {
        return (
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                        <a href="javascript:void(0);" class="bars"></a>
                        <a class="navbar-brand" href="index.html">CyberSmart | Eco-Friendly Smart Home</a>
                    </div>
                </div>
            </nav>
        )
    }
}
