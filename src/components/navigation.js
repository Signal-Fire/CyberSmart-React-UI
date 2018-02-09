/*jshint esversion: 6*/
import React, { Component } from 'react'

//the left sidebar
export default class Navigation extends Component {
    render() {
        return (     
            <div>       
                <div class="menu">
                    <ul class="list">
                        <li class="header">MAIN NAVIGATION</li>
                        <li class={this.props.active}>
                            <a href="index.html">
                                <i class="material-icons">home</i>
                                <span>Home</span>
                            </a>
                        </li>
                        <a href="./pages/devices.html">
                            <i class="material-icons">widgets</i>
                            <span>Devices</span>
                        </a>
                        <a href="./pages/help.html">
                            <i class="material-icons">help</i>
                            <span>Help</span>
                        </a>
                        <a href="./pages/sign-in.html">
                            <i class="material-icons">arrow_back</i>
                            <span>Sign out</span>
                        </a>
                    </ul>
                </div>
                <div class="legal">
                    <div class="copyright">
                        &copy; 2018 <a href="javascript:void(0);">CyberSmart</a>
                    </div>
                </div>
            </div>
        )
    }
}
