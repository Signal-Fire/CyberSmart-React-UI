import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Side Bar Test Suite', () => {
    test('renders without crashing', () => { 
        const initialState = {
            login : {
                sidebarOpen : false
            },
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

        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store = {store}>
            <SideBar />
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});