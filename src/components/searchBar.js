/*jshint esversion: 6*/
import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a className="js-search" data-close="true"><i className="material-icons">search</i></a></li>
                    </ul>
                </div>
                <div className="search-bar">
                    <div className="search-icon">
                        <i className="material-icons">search</i>
                    </div>
                        <input type="text" placeholder="START TYPING... " />
                    <div className="close-search">
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </div>
        )
    }
}
