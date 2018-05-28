import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './';

test('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<Grid />, table);
    ReactDOM.unmountComponentAtNode(table);
});