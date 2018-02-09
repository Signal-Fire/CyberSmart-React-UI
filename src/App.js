/*jshint esversion:6 */
import React, { Component } from 'react';

//import { Home } from './pages/exports';
import { BlockHeader, PageLoader, TopBar, Navigation } from './components/exports';

class App extends Component {
  render() {
    return (
      <div>
        <PageLoader />
          <div className="overlay"></div>    
          <TopBar />
          <section>
            <aside id="leftsidebar" className="sidebar">
              <Navigation />
            </aside>
          </section>
          <section className="content">
            <div className="container-fluid">
              <BlockHeader header="DASHBOARD"/>
              
            </div>
          </section>
      </div>
    )
  }
}

export default App;



