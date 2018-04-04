import React from 'react';
import Container from '../Container';
import { Header } from 'semantic-ui-react';
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
    {power: 20, time: '21:30'},
    {power: 0, time: '22:00'},
    {power: 89, time: '22:30'},
    {power: 78, time: '23:00'},
    {power: 65, time: '23:30'},
    {power: 23, time: '00:00'},
    {power: 15, time: '00:30'},
    {power: 2, time: '01:00'}
];

const BasicChart = ( { header }) => {
    return (
        <div>
            <Header as ='h3' textAlign='center'>{ header }</Header>
            <Container>
                <LineChart data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey= 'time'/>
                        <YAxis dataKey = 'power'/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey='power' stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey='time' stroke="#82ca9d" />
                </LineChart>
            </Container>
        </div>
    );
}

export default BasicChart;
