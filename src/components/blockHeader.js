/*jshint esversion: 6*/
import React, { Component } from 'react'

export default class BlockHeader extends Component {
    render() {
        return (
            <div class="block-header">
                <h2>{this.props.header}</h2>
            </div>
        )
    }
}
