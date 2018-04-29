import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../containers';
import * as stateLoader from './stateManager';

const middleware = [thunk];

if (window.navigator.userAgent.include('Chrome')) {
    export default  createStore(
        rootReducer, 
        stateLoader.loadState(), 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} else {
    export default  createStore(
        rootReducer, 
        stateLoader.loadState(), 
        compose(
            applyMiddleware(...middleware)
        )
    );
}