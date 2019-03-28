import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

describe('Locations Created Tag Test Suite', () => {
    test('renders without crashing', () => {
        const location = {
            signup_timestamp : '2018-05-05',
            created_by_user : 'test suite'
        }

        const div = document.createElement('div');
        ReactDOM.render(<Tag location = { location }/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});