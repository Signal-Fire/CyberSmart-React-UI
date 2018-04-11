import { GET_LOCATIONS } from './actionTypes';

const initialState = {
    locations : null,
    error : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations : action.payload,
                error : action.error
            }
        default:
            return state;
    }
}

export const getLocations = () => {
    return initialState.locations
}

export const createLocationsDropdown = () => {
    console.log(initialState);
    if (initialState.locations === null ||
        initialState.locations.length < 1)
        return null;

    var data = this.state.locations.forEach(item => {           
        item.label = item.name;
        item.value = item._id;
        item.type = 'location';              
    });
    return data;
}