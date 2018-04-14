import * as actionTypes from './actionTypes';

const locationState = {
    locations : null,
    isLoading : true,
    error : false,
    modalOpen : false
}

export default function(state = locationState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.GET_LOCATIONS:
            return {
                locations : payload.error ? 
                    null
                    :
                    payload.locations,
                error : payload.error,
                isLoading : false
            }    
        case actionTypes.ADD_LOCATION:
            return {
                locations : payload.error ? 
                    locationState.locations 
                    : 
                    locationState.locations.concat(payload.location),
                error : payload.error,
                isLoading : false
            }     
        case actionTypes.OPERATE_MODAL:            
            return {
                ...state,
                modalOpen : !locationState.modalOpen
            }
        default:
            return state;
    }
}

export const getLocations = () => {
    return locationState.locations;
}

export const isLoading = () => {    
    return locationState.isLoading;
}

export const isError = () => {
    return locationState.error;
}

export const getModalState = () => {
    return locationState.modalOpen;
}

export const getLocationDropdown = () => {
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