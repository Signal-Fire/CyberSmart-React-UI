import React from 'react';
import ReactDOM from 'react-dom';
import Delete from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Delete />, div);
    ReactDOM.unmountComponentAtNode(div);
});