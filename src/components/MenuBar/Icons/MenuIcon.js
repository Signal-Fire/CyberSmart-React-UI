/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Dropdown, Icon } from 'semantic-ui-react';

export default class MenuIcon extends Component {
    render() {
        return (
            <Dropdown.Item>
                <Icon name = { this.props.icon } />
                {this.props.title}           
            </Dropdown.Item>
        )
    }
}
