import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tag />, div);
    ReactDOM.unmountComponentAtNode(div);
});