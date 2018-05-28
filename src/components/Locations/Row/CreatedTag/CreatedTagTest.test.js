import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

test('renders without crashing', () => {
    const user = {
        signup_timestamp : '2018-05-05',
        created_by_user : 'test suite'
    }

    const div = document.createElement('div');
    ReactDOM.render(<Tag user = { user }/>, div);
    ReactDOM.unmountComponentAtNode(div);
});