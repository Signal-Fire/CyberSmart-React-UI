/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmModal from './index';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConfirmModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});