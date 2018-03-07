/* jshint esversion: 6 */
import React, { Component } from 'react';

import { StatisticsWidget } from '../../components/Exports/Widgets';

import { Card, Icon } from 'semantic-ui-react';

export default class LocationWidget extends Component {
    constructor() {
        super();
        this.state = {
            roomDevices : 0
        };
    }

    componentDidMount() {
        this.setState({
            roomDevices : this.props.roomDevices
        });
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
                        {this.props.name}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <StatisticsWidget icon = 'power' title = 'Devices' number = {this.props.roomDevices}/>
                </Card.Content>
            </Card>
        )
    }
}
