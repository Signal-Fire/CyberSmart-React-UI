/* jshint esversion: 6 */
import React, { Component } from 'react';

import { StatisticsWidget } from '../../components/Exports/Widgets';

import { Card, Icon } from 'semantic-ui-react';

export default class LocationWidget extends Component {
    constructor() {
        super();
        this.state = {
            location : null
        };
    }

    componentWillMount() {
        this.setState({
            location : this.props.location
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
                        {this.state.location.name}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <StatisticsWidget icon = 'power' title = 'Active Devices' number = {this.state.location.active.length > 0 ? this.props.location.activeDevices : 0}/>
                    <StatisticsWidget icon = 'power' title = 'Active Devices' number = {this.state.location.active.length > 0 ? this.props.location.activeDevices : 0}/>
                </Card.Content>
            </Card>
        )
    }
}
