/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import LoginModal from './index';

import { API_USERS_URL } from '../../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders without crashing', () => {
    var Mock = new MockAdapter(axios);

    const data = {
        firstName : "",
        lastName: "",
        username: ""
    };

    Mock.onPost(API_USERS_URL + '/login').reply(200, data);
    
    const div = document.createElement('div');
    ReactDOM.render(<LoginModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});