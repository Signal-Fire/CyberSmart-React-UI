/*jshint esversion:6 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header';
import Home from './pages/home';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className = "main">
            <Header />
            <br />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
          </div>
        </Router>
    )
  }
}

export default App;
