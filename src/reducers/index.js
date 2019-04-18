import {combineReducers} from "redux";
import AuthenticationReducer from './reducer-logged-in';
import ActionInfoReducer from './reducer-action-info'
import RessourceReducer from './reducer-ressources';

const rootReducer = combineReducers({
    authentication: AuthenticationReducer,
    actionInfo: ActionInfoReducer,
    ressource: RessourceReducer
});

export default rootReducer