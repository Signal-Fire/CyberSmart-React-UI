/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Dropdown, Icon } from 'semantic-ui-react';

export default class componentName extends Component {
    render() {
        return (
            <Dropdown.Item>
                <Icon name = 'settings' />
                {this.props.title}           
            </Dropdown.Item>
        )
    }
}
