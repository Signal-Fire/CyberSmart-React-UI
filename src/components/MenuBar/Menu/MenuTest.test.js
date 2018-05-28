import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Menu Bar Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            logs : {
                notifications : []
            },
            login : {
                token  : null
            },
            user : {
                modalOpen : false,
                first_name : null,
                last_name : null,
                username : null,
                error : null
            }
        }

        const store = mockStore(initialState);

        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <Menu />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});