import * as config from '../config';

export const loadState = () => {
    try {
        let serializedState = localStorage.getItem(config.USER_COOKIE_IDENTIFIER);

        if (serializedState === null)
            return initializeState();

        return JSON.parse(serializedState);
    } catch (ex) {
        return initializeState();
    }
}

export const saveState = (state) => {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem(config.USER_COOKIE_IDENTIFIER, serializedState);
    } catch (ex) {
        //do nothin
    }
}

export const initializeState = () => {
    return {

    };
}