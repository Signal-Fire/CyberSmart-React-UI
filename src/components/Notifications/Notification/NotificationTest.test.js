import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './';

test('renders without crashing', () => {
    const notification = 
    {
        timestamp : '',
        created_by_user : '',
        type : '',
        message : ''
    }
    const div = document.createElement('div');
    ReactDOM.render(<Notification notification = {notification}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});