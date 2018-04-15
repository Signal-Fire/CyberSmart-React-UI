import { GET_CONNECTED_DEVICES } from './actionTypes';

const initialState = {
    devices : null,
    error : false,
    isLoading : true
}

export default function(state = initialState, action) {  
    var payload = action.payload;

    switch(action.type) {        
        case GET_CONNECTED_DEVICES:
            return {
                ...state,
                devices : payload.devices ? 
                    payload.devices 
                    : 
                    null,
                error : payload.error,
                isLoading : false
            }
        default:
            return state;
    }
}

export const getDevices = () => {
    return initialState.devices;
}

export const isLoading = () => {
    return initialState.isLoading;
}

export const isError = () => {
    return initialState.error
}

export const getDeviceDropdown = () => {
    //var devices = initialState.devices;

    var options = [
        { key: 'af1', value: 'af1', text: 'Afghanistan1', id: 1, name : 'afft'},
        { key: 'af2', value: 'af2', text: 'Afghanistan2', id: 2, name : 'afft' },
        { key: 'af3', value: 'af3', text: 'Afghanistan3', id : 3, name : 'afft' },
        { key: 'af4', value: 'af4', text: 'Afghanistan4', id: 4, name : 'afft' },
        { key: 'af5', value: 'af5', text: 'Afghanistan5', id : 5, name : 'afft' }
    ]

    /*options.forEach(item => {
        item.key = item._id;
        item.id = item._id;
        item.name = item._id;
        item.value = item.name;
        item.text = item.name;
       
    });*/

    return options;
}