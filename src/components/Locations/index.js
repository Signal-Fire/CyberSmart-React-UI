/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Card, Icon } from 'semantic-ui-react';

export default class LocationWidget extends Component {
    componentWillMount() {
        console.log(this.props.location);
    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Icon name = 'home' size='large'/>
                    </Card.Header>
                    <Card.Meta>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.location.name}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
