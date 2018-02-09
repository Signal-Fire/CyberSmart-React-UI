/*jshint esversion: 6*/
import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="javascript:void(0);" class="js-search" data-close="true"><i class="material-icons">search</i></a></li>
                    </ul>
                </div>
                <div class="search-bar">
                    <div class="search-icon">
                        <i class="material-icons">search</i>
                    </div>
                        <input type="text" placeholder="START TYPING... " />
                    <div class="close-search">
                        <i class="material-icons">close</i>
                    </div>
                </div>
            </div>
        )
    }
}
