import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid />, div);
    ReactDOM.unmountComponentAtNode(div);
});