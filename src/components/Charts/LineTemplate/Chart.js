import React from 'react';
import Container from '../Container';
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

export default ({
    data,
    dataKeys
}) => {
  return (
      <Container>
        <LineChart data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey= {dataKeys.X}/>
                <YAxis dataKey = {dataKeys.Y}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey={dataKeys.Y} stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey={dataKeys.X} stroke="#82ca9d" />
        </LineChart>
      </Container>
  )
}
