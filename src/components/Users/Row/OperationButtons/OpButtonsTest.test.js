import React from 'react';
import ReactDOM from 'react-dom';
import OpBtns from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OpBtns />, div);
    ReactDOM.unmountComponentAtNode(div);
});