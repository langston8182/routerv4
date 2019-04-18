import {ADD_RESSOURCE, INCREMENT_ACTION_COUNT, SET_AUTHENTICATION} from "./action-types";

export function setAuthentication(isLoggedIn) {
    return function(dispatch) {
        dispatch({
            type: SET_AUTHENTICATION,
            payload: isLoggedIn
        });
    }
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTION_COUNT
    };
}

export function addRessource() {
    return {
        type: ADD_RESSOURCE
    };
}