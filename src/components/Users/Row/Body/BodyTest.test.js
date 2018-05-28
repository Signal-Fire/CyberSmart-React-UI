import React from 'react';
import ReactDOM from 'react-dom';
import Body from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Users Table Body Tests', () => {
    test('renders without crashing', () => {
        const initialState = {
            user: {
                all_users : [{
                    _id : '1',
                    username : 'henry',
                    first_name : 'Henry',
                    last_name : 'Pye'
                }]
            },
            login : {
                token : null
            } 
        }
        const store = mockStore(initialState);

        const table = document.createElement('tbody');
        ReactDOM.render(
        <Provider store = {store}>
            <Body />
        </Provider>, table);
        ReactDOM.unmountComponentAtNode(table);
    });
});