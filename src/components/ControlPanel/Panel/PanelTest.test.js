import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Control Panel Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            locations : {
                modalOpen : false
            },
            user : {
                all_users : []
            },
            devices : {
                modalOpen : false
            }
        }

        const store = mockStore(initialState);

        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <Panel />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});