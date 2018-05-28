import React from 'react';
import ReactDOM from 'react-dom';
import Delete from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Devices Delete Label Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            login : {
                token : null
            },
            user : {
                first_name : ''
            }
        }

        const store = mockStore(initialState);

        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = { store }>
            <Delete id = '1' />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});