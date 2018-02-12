/*jshint esversion: 6*/
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <li className="header">{this.props.header}</li>
        )
    }
}
