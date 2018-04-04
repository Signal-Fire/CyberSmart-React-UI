/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import SideBarPusher from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideBarPusher />, div);
    ReactDOM.unmountComponentAtNode(div);
});