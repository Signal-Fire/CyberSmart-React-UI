/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import HubModal from './index';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HubModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});