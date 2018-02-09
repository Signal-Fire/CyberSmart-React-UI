/*jshint esversion:6 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import { Home } from './pages/exports';
import { BlockHeader, PageLoader, TopBar, Navigation } from './components/exports';

class App extends Component {
  render() {
    return (
      <div>
        <PageLoader />
          <div class="overlay"></div>    
          <TopBar />
          <section>
            <aside id="leftsidebar" class="sidebar">
              <Navigation />
            </aside>
          </section>
          <section class="content">
            <div class="container-fluid">
              <BlockHeader header="DASHBOARD"/>
              
            </div>
          </section>
      </div>
    )
  }
}

export default App;

/*
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

*/

