/*jshint esversion: 6*/
import React, {  Component  } from 'react';
import { Header, Card } from 'semantic-ui-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default class charts extends Component {
  render() {
    const data = [
        {time: '21:00', Kwh: 10},
        {time: '22:00', Kwh: 70},
        {time: '23:00', Kwh: 80},
        {time: '00:00', Kwh: 85},
        {time: '01:00', Kwh: 20},
        {time: '02:00', Kwh: 32},
        {time: '03:00', Kwh: 13},
    ];
    return (
      <Card.Group>
        <Card fluid color={this.props.color} header={this.props.name} />
          <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                  <XAxis dataKey="time"/>
                  <YAxis dataKey='Kwh'/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Area connectNulls={true} type='monotone' dataKey='Kwh' stroke='#fff' fill='#fff500' />
              </AreaChart>
          </ResponsiveContainer>
        </Card.Group>
    );
  }
}
