import {SET_AUTHENTICATION} from "./action-types";

export function setAuthentication(isLoggedIn) {
    return {
        type: SET_AUTHENTICATION,
        payload: isLoggedIn
    };
}