/*jshint esversion: 6*/
import React, { Component } from 'react';

import { Button, Icon } from 'react-materialize';

export default class NavigationTab extends Component {
    render() {
        return (
            <span>
                <Button waves="light">
                    <Icon>{this.props.icon}</Icon>
                    <span>{this.props.name}</span>
                </Button>
            </span>
        );
    }
}
