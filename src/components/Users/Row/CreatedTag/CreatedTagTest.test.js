import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

describe('Created Tag Test Suite', () => {
    test('renders without crashing', () => {
        const user = {
            signup_timestamp : '2018-05-05'
        }

        const div = document.createElement('div');
        ReactDOM.render(<Tag signup_timestamp = { user.signup_timestamp }/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});