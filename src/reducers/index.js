import { combineReducers } from 'redux';
import loginReducer from './Login';
import deviceReducer from './Devices';

export default combineReducers({
    loginReducer,
    deviceReducer
})