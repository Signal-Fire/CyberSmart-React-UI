import React from 'react';
import ReactDOM from 'react-dom';
import Body from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Devices Table Body Test Suite', () => {
    test('renders without crashing with no devices and no locations', () => {
        const initialState = {
            locations : [],
            devices : []
        }
        const store = mockStore( initialState );

        const div = document.createElement('div');

        ReactDOM.render(
        <Provider store = { store }>
            <Body />
        </Provider>, div);

        ReactDOM.unmountComponentAtNode(div);
    });
    test('renders without crashing with devices and locations', () => {
        const initialState = {
            locations : [{
                _id : '1',
                active : true,
                name : 'Living Room',
                created_by_user : 'henry'
            }],
            devices : [{
                active : true,
                location : 'Living Room'
            }]
        }

        const store = mockStore( initialState );

        const div = document.createElement('div');

        ReactDOM.render(
        <Provider store = { store }>
            <Body />
        </Provider>, div);

        ReactDOM.unmountComponentAtNode(div);
    });
})