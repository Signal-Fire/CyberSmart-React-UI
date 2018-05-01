import React from 'react';
import ReactDOM from 'react-dom';
import AddUserModal from './index';


import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders without crashing', () => {
    var Mock = new MockAdapter(axios);

    var data = {

    };

    //Mock.onPost(API_LOCATION_URL + '/add').reply(200, data);
    
    const div = document.createElement('div');
    ReactDOM.render(<AddUserModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});