/* jshint esversion: 6 */
import React, { Component } from 'react';

import { StatisticsWidget } from '../../components/Exports/Widgets';

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
                <Card.Content extra>
                    <StatisticsWidget icon = 'power' title = 'Active Devices' number = {this.props.location.activeDevices > 0 ? this.props.location.activeDevices : 0}/>
                    <StatisticsWidget icon = 'plug' title = 'Inactive Devices' number = {this.props.location.inactiveDevices > 0 ? this.props.location.inactiveDevices : 0}/>
                </Card.Content>
            </Card>
        )
    }
}
