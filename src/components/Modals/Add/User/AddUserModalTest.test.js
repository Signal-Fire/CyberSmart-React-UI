import React from 'react';
import ReactDOM from 'react-dom';
import AddUserModal from './index';

import { API_USERS_URL } from '../../../../config';

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
                createModalOpen : false
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
            <AddUserModal />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});