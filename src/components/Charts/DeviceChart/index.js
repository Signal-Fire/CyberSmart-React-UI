import React from 'react';
import { connect } from 'react-redux';
import Container from '../Container';
import { Header } from 'semantic-ui-react';
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const BasicChart = ( { 
    header,
    devices,
    locations 
}) => {
    const data = [];  
    
    locations.forEach(location => {        
        data.push({devices: devices.filter(x => x.location === location.name && x.active).length, room: location.name})
    })
    
    return (
        <div>
            <Header as ='h3' textAlign='center'>{ header }</Header>
            <Container>                
                <LineChart data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey= 'room'/>
                        <YAxis dataKey = 'devices'/>
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

const mapStateToProps = state => ({
    devices : state.devices.devices,
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(BasicChart);
