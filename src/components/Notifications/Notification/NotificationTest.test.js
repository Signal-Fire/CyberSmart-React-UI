import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notification />, div);
    ReactDOM.unmountComponentAtNode(div);
});