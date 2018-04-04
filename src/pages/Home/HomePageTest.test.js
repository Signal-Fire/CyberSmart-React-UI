import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './';

import { API_DEVICES_URL } from '../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders without crashing', () => {
    var Mock = new MockAdapter(axios);
    Mock.onGet(API_DEVICES_URL + '/find/all').reply(200);

    const div = document.createElement('div');
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
});