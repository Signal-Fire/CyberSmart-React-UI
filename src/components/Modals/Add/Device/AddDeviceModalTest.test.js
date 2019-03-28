import React from 'react';
import ReactDOM from 'react-dom';
import AddDeviceModal from './index';

import { API_DEVICES_URL, API_LOCATION_URL } from '../../../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Add Device Modal Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            devices : {
                modalOpen : false
            }
        }

        const store = mockStore(initialState);

        var Mock = new MockAdapter(axios);

        var data = {

        };

        Mock.onPost(API_DEVICES_URL + '/add').reply(200, data);
        Mock.onGet(API_DEVICES_URL + '/find/connected').reply(200, data);
        Mock.onGet(API_LOCATION_URL + '/find/all').reply(200, data);
        
        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <AddDeviceModal />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});