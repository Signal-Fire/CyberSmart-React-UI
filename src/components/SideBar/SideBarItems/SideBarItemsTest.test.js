/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import SideBarItems from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideBarItems />, div);
    ReactDOM.unmountComponentAtNode(div);
});