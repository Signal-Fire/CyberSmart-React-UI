import React from 'react';
import { connect } from 'react-redux';
import Container from '../Container';
import { Header } from 'semantic-ui-react';
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const BasicChart = ( { 
    header
}) => {
    const data = [];  
    
    for (var i = 0; i < 20; i++) {
        data.push(
            {time : '21:00', kwh: Math.floor((Math.random() * 10))})
    }
        
    return (
        <div>
            <Header as ='h3' textAlign='center'>{ header }</Header>
            <Container>                
                <LineChart data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey= 'time'/>
                        <YAxis dataKey = 'state'/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey='devices' stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey='room' stroke="#82ca9d" />
                </LineChart>
            </Container>
        </div>
    );
}

export default connect(null, null)(BasicChart);
