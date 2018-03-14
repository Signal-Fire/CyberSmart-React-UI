/* jshint esversion: 6*/
import React, { Component } from 'react';

import { USER_COOKIE_IDENTIFIER, API_STATE_URL } from '../../config';

import { Card, Button } from 'semantic-ui-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import axios from 'axios';

export default class Device extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            deviceState : props.state
        };
    }
    componentDidMount() {
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(state) {
        console.log();
        axios({ method: 'POST',
            url: API_STATE_URL + '/changestate',
            headers: {
                'Authorization' : localStorage.getItem(USER_COOKIE_IDENTIFIER)
            },
            data: {
                address : this.props.address,
                state : state
            }
        }).then(res => {
            this.setState({
                deviceState : state
            })
        }).catch(err => {
            console.error(err);
        });
      }    

    render() {
        const data = [
            {name: '13:00', kwh: 2400},
            {name: '13:30', kwh: 1398},
            {name: '14:00', kwh: 9800},
            {name: '14:30', kwh: 3908},
            {name: '15:00', kwh: 4800},
            {name: '15:30', kwh: 3800},
            {name: '16:00', kwh: 4300},
        ];

        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                    {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                    {this.state.deviceState === 0 ? 'OFF' : 'ON'}
                    </Card.Meta>
                    <Card.Description>
                    <ResponsiveContainer width="100%" height={50}>
                        <AreaChart width={240} height={50} data={data}>
                            <Area type="monotone" dataKey="kwh" stroke={this.state.deviceState === 1 ? "#82ca9d" : "#ff0000"} fillOpacity={0.5} fill={this.state.deviceState === 1 ? "#82ca9d" : "#ff0000"} />
                        </AreaChart>
                    </ResponsiveContainer>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green' onClick = {() => this.handleClick(1)}>ON</Button>
                    <Button basic color='red' onClick = {() => this.handleClick(0)}>OFF</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
