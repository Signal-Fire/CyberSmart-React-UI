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
    return this.state.locations
}

export const createLocationsDropdown = () => {
    if (this.state.locations === null ||
        this.state.locations.length < 1)
        return null;

    var data = this.state.locations.forEach(item => {           
        item.key = item._id;  
        item.text = item.name;
        item.value = item._id;               
    });
    return data;
}