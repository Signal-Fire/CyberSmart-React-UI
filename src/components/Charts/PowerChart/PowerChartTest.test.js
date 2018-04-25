import React from 'react';
import ReactDOM from 'react-dom';
import PowerChart from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PowerChart />, div);
    ReactDOM.unmountComponentAtNode(div);
});