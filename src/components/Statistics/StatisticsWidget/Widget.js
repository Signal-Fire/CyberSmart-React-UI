/*jshint esversion: 6*/
import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

export default class StatisticWidget extends Component {
    render() {
        return (
            <Statistic >
                <Statistic.Value >
                    <Icon name = {this.props.icon} /> 
                    <p>{this.props.number}</p> 
                </Statistic.Value> 
                <Statistic.Label > 
                    <p>{this.props.title}</p>
                </Statistic.Label> 
                </Statistic>
        )
    }
}
