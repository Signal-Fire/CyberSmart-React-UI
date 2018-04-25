import { combineReducers } from 'redux';
import loginReducer from './Login/reducer';
import deviceReducer from './Devices/reducer';
import locationReducer from './Location/reducer';
import connectedReducer from './ConnectedDevices/reducer';
import notificationsReducer from './Notifications/reducer';
import userReducer from './User/reducer';

export default combineReducers({
    login : loginReducer,
    devices : deviceReducer,
    locations : locationReducer,
    connected : connectedReducer,
    logs : notificationsReducer,
    user : userReducer
})