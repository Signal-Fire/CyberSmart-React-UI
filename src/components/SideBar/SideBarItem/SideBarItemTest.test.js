/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import SideBarItem from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideBarItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});