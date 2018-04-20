import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './';

test('renders without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<TextInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});