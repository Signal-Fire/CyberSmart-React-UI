/* jshint esversion: 6*/
import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default class CPUChart extends Component {
    render() {
        const data = [
            {time: '21:00', cpu: 20},
            {time: '21:30', cpu: 80},
            {time: '22:00', cpu: 90},
            {time: '22:30', cpu: 95},
            {time: '23:00', cpu: 10},
            {time: '23:30', cpu: 12},
            {time: '00:00', cpu: 33},
        ];

        return (
            <div>
                <Header as ='h3' textAlign='center'>CPU Usage</Header>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                        <XAxis dataKey="time" />
                        <YAxis dataKey='cpu'/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Area connectNulls={true} type='monotone' dataKey='cpu' stroke='#fff' fill='#0534b7'/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
