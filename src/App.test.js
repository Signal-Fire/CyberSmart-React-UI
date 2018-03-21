/* jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

it('renders without crashing', () => {
  var Mock = new MockAdapter(axios);
  var data = {
    response : 1
  };
  Mock.onGet().reply(200, data);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
