import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../containers';
import * as stateLoader from './stateManager';

const middleware = [thunk];

export default  createStore(
    rootReducer, 
    stateLoader.loadState(), 
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
    )
);
