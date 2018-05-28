import React from 'react';
import ReactDOM from 'react-dom';
import { CustomChart } from './';

describe('Line Chart Test Suite', () => {
    it('renders a line chart without worries', () => {
        const chartData = [
            {kwh: 0.89, time: '21:30'},
            {kwh: 0.75, time: '22:00'},
            {kwh: 0.62, time: '22:30'},
            {kwh: 0.2, time: '23:00'},
            {kwh: 0.15, time: '23:30'},
            {kwh: 0.09, time: '00:00'},
            {kwh: 0.09, time: '00:30'},
            {kwh: 0.09, time: '01:00'}
        ];

        var div = document.createElement('div');
        ReactDOM.render(<CustomChart 
                            chartData = { chartData }
                            dataKeys = { { 
                              X : 'time',
                              Y : 'kwh'  
                            } }/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})