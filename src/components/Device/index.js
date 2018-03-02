/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { AreaChart, Area } from 'recharts';

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
        return fetch('http://192.168.1.107:8000/api/state/changestate', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
          },
          body: JSON.stringify({
              state : state
          })
        }).then(() => {
            this.setState({
                deviceState : state
            });
          })
          .catch((error) => {
            console.error(error);
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
                        <AreaChart width={240} height={50} data={data}>
                            <Area type="monotone" dataKey="kwh" stroke={this.state.deviceState === 1 ? "#82ca9d" : "#ff0000"} fillOpacity={0.5} fill={this.state.deviceState === 1 ? "#82ca9d" : "#ff0000"} />
                        </AreaChart>
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
