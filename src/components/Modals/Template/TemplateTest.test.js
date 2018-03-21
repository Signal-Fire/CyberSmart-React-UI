/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import SemanticModal from './index';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SemanticModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});