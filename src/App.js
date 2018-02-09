/*jshint esversion:6 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header';
import Home from './pages/home';

import './App.css';
import 'https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext';
import 'https://fonts.googleapis.com/icon?family=Material+Icons';
import './assets/plugins/node-waves/waves.css'; //Waves effect
import './assets/plugins/animate-css/animate.css'; //Animation
import './assets/plugins/morrisjs/morris.css'; //Morris chart
import './assets/css/style.css'; //UI custom CSS
import './assets/css/themes/theme-black.css'; //AdminBSB theme-black

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
