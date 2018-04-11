/* jshint esversion: 6*/
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { getLocations } from './containers/Location/action';
import { getDevices } from './containers/Devices/action';
import { getConnectedDevices } from './containers/ConnectedDevices/action';

store.dispatch(getLocations());
store.dispatch(getDevices());
store.dispatch(getConnectedDevices());

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root'));
}

store.subscribe(render);

render();

registerServiceWorker();
