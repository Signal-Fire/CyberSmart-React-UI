/* jshint esversion: 6*/
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as stateLoader from './store/stateManager';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as deviceActions from './containers/Devices/action';
import * as locationActions from './containers/Location/action';
import * as connectedActions from './containers/ConnectedDevices/action';

store.dispatch(deviceActions.getDevices());
store.dispatch(locationActions.getLocations());
store.dispatch(connectedActions.getConnectedDevices());

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();

