import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Devices Created Tag Test Suite', () => {
    test('renders without crashing', () => {
        const initialState = {
            devices : {
                devices : [],
                isLoading : false
            }
        }        
        const store = mockStore(initialState);

        const div = document.createElement('div');

        ReactDOM.render(
        <Provider store = {store}>
            <Tag />
        </Provider>, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});
