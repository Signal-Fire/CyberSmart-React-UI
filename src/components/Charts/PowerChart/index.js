import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { LineChartTemplate } from '../LineTemplate';

const data = [
    {kwh: 0.89, time: '21:30'},
    {kwh: 0.75, time: '22:00'},
    {kwh: 0.62, time: '22:30'},
    {kwh: 0.2, time: '23:00'},
    {kwh: 0.15, time: '23:30'},
    {kwh: 0.09, time: '00:00'},
    {kwh: 0.09, time: '00:30'},
    {kwh: 0.09, time: '01:00'}
];

export default ( { header }) => {
    return (
        <Segment>
            <Header as ='h3' textAlign='center'>{ header }</Header>
            <LineChartTemplate 
                data = {data}
                dataKeys = {{
                        X : 'time',
                        Y : 'kwh'
                }} />
        </Segment>
    );
}