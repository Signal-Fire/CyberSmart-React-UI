import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

describe('Devices Created Tag Test Suite', () => {
    test('renders without crashing', () => {
        const device = {
            created_by_user : 'henry',
            date_added : 'now'
        }

        const div = document.createElement('div');

        ReactDOM.render(<Tag device = { device } />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});