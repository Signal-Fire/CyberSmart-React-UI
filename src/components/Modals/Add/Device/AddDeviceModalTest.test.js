/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import UserSettingsModal from './index';

import { API_DEVICES_URL } from '../../../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders without crashing', () => {
    var Mock = new MockAdapter(axios);

    var data = {

    };

    Mock.onPost(API_DEVICES_URL + '/add').reply(200, data);
    Mock.onGet(API_DEVICES_URL + '/find/connected').reply(200, data);
    
    const div = document.createElement('div');
    ReactDOM.render(<UserSettingsModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});