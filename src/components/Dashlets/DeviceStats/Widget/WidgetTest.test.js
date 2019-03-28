import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './';

test('renders without crashing', () => {
    const stats = {
        icon : 'mobile',
        name : 'mobile',
        color : 'blue',
        title : 'sealife'
    }

    const div = document.createElement('div');
    ReactDOM.render(<Widget stats = { stats }/>, div);
    ReactDOM.unmountComponentAtNode(div);
});