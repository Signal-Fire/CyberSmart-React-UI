import React from 'react';
import ReactDOM from 'react-dom';
import Announcements from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Announcements />, div);
    ReactDOM.unmountComponentAtNode(div);
});