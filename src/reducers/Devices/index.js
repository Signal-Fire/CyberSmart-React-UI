import { GET_DEVICES  } from '../../actions/Types/Devices';

const initialState = {
    devices: [],
    error : false,
    newDevice : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices : action.payload,
                error : action.error,
                newDevice : false
            }        
        default:
            return state;
    }
}