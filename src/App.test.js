import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('app test suite', () => {
  it('renders without crashing', () => {
    var Mock = new MockAdapter(axios);

    var data = {
      response : 1
    };

    const initialState = {
      token : null
    }

    const store = mockStore(initialState);

    Mock.onGet().reply(200, data);

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store = {store}>
        <App />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
