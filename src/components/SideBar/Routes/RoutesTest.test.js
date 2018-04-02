/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Routes />, div);
    ReactDOM.unmountComponentAtNode(div);
});