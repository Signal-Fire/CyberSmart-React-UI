/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import UserSettingsModal from './index';

import { API_USERS_URL } from '../../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('User Settings Modal Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            user : {
                modalOpen : false
            }
        }

        const store = mockStore(initialState);

        var Mock = new MockAdapter(axios);

        const data = {
            firstName : "",
            lastName: "",
            username: ""
        };

        Mock.onGet(API_USERS_URL + '/info').reply(200, data);
        
        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <UserSettingsModal />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});