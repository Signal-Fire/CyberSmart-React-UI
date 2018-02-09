/*jshint esversion:6 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//ChartJS now imported.. https://github.com/reactjs/react-chartjs
import Header from './components/header';
import Home from './pages/home';

import './App.css';

/** Allll the imports **/
import './assets/plugins/node-waves/waves.css'; //Waves effect
import './assets/plugins/animate-css/animate.css'; //Animation
import './assets/plugins/morrisjs/morris.css'; //Morris chart
import './assets/css/style.css'; //UI custom CSS
import './assets/css/themes/theme-black.css'; //AdminBSB theme-black

/* JavaScript */
import './assets/plugins/jquery/jquery.min'; //Jquery Core
import './assets/plugins/jquery-slimscroll/jquery.slimscroll'; //Slimscroll
import './assets/plugins/node-waves/waves'; //Waves effect
import './assets/plugins/jquery-countto/jquery.countTo'; //Jquery count
import './assets/plugins/raphael/raphael.min'; //Morris Raphael
import './assets/plugins/morrisjs/morris'; //Morris 
import './assets/plugins/flot-charts/jquery.flot'; //Flot charts
import './assets/plugins/flot-charts/jquery.flot.resize'; //Flot resize
import './assets/plugins/flot-charts/jquery.flot.pie'; //Flot pi 
import './assets/plugins/flot-charts/jquery.flot.categories'; //Flot categories
import './assets/plugins/flot-charts/jquery.flot.time'; //Flot time
import './assets/plugins/jquery-sparkline/jquery.sparkline'; //Sparkline charts
import './assets/js/admin'; //Custom (Admin)
import './assets/js/pages/index'; //Custom (Admin)
import './assets/js/demo'; //Custom (Demo?)

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
