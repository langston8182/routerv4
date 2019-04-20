import {
    ADD_RESSOURCE,
    INCREMENT_ACTION_COUNT,
    PARSE_ERROR,
    PARSE_MESSAGE,
    RESET_ERROR,
    SET_AUTHENTICATION
} from "./action-types";
import axios from 'axios';

const BASE_URL = "http://localhost:3090";

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

export function signinUser({email, password}, history) {
    return function(dispatch) {
        axios.post(`${BASE_URL}/signin`, {
           email,
           password
        }).then(response => {
            localStorage.setItem("token", response.data.token);
            dispatch(setAuthentication(true));
            history.push("/ressources");
        }).catch(error => {
            dispatch(parseError("Identifiants invalides"));
        });
    }
}

export function signupUser({email, password}, history) {
    return function(dispatch) {
        axios.post(`${BASE_URL}/signup`, {
            email,
            password
        }).then(response => {
            localStorage.setItem("token", response.data.token);
            dispatch(setAuthentication(true));
            history.push("/ressources");
        }).catch(error => {

        });
    }
}

export function getSpecialRessource() {
    return function(dispatch) {
        axios.get(`${BASE_URL}/specialRessource`, {
            headers: { authorization: localStorage.getItem("token") }
        }).then(response => {
            dispatch({
                type: PARSE_MESSAGE,
                payload: response.data.result
            })
        }).catch(error => {

        });
    }
}

export function signoutUser() {
    return function(dispatch) {
        dispatch(setAuthentication(false));
        localStorage.removeItem("token");
    };
}

export function parseError(errorMessage) {
    return {
        type: PARSE_ERROR,
        payload: errorMessage
    };
}

export function resetError() {
    return {
        type: RESET_ERROR
    };
}