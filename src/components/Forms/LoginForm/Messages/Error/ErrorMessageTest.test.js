import React from 'react';
import ReactDOM from 'react-dom';
import Message from './';

test('renders without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<Message />, div);
    ReactDOM.unmountComponentAtNode(div);
});