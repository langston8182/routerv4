import {combineReducers} from "redux";
import AuthenticationReducer from './reducer-logged-in';

const rootReducer = combineReducers({
    authentication: AuthenticationReducer
});

export default rootReducer