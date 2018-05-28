import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './';

import { API_DEVICES_URL } from '../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home Page Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            locations : {
                locations : []
            },
            devices : {
                devices : []
            },
            user : {
                all_users : []
            }
        }

        const store = mockStore(initialState);

        var Mock = new MockAdapter(axios);
        Mock.onGet(API_DEVICES_URL + '/find/all').reply(200);

        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <HomePage />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});