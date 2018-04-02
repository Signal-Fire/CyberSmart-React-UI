/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});