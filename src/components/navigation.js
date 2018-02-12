/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Legal } from './exports';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header, NavTab } from './navigation/exports';
import { Home } from '../pages/exports';

export default class Navigation extends Component {
    render() {
        return (     
            <Router>
                <div>       
                    <div className="menu">
                        <ul className="list">
                            <Header header="MAIN NAVIGATION" />
                            <Link to="/">
                                <NavTab icon="home" name="Home"/>
                            </Link>
                            <Link to="/">
                                <NavTab icon="devices" name="Devices"/>
                            </Link>
                            <Link to="/">
                                <NavTab icon="help" name="Help"/>
                            </Link>
                            <Link to="/">
                                <NavTab icon="arrow_back" name="Sign out" />
                            </Link>
                            <Route exact path="/" component={Home} />
                            <Route path = "/" component = {Home} />
                            <Route path = "/" component = {Home} />
                            <Route path = "/" component = {Home} />
                        </ul>
                    </div>
                    <Legal />
                </div>           
            </Router>
        )
    }
}
