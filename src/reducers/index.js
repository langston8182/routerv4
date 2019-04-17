import {combineReducers} from "redux";
import AuthenticationReducer from './reducer-logged-in';
import ActionInfoReducer from './reducer-action-info'

const rootReducer = combineReducers({
    authentication: AuthenticationReducer,
    actionInfo: ActionInfoReducer
});

export default rootReducer