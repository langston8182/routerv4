import {SET_AUTHENTICATION} from "../actions/action-types";

const initialState = {
    isLoggedIn: false
};

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATION:
            return {
                isLoggedIn: action.payload
            };

        default:
            return state;
    };
}