import { combineReducers } from 'redux';
import loginReducer from './Login/reducer';
import deviceReducer from './Devices/reducer';
import locationReducer from './Location/reducer';

export default combineReducers({
    loginReducer,
    deviceReducer,
    locationReducer
})