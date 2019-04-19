import {combineReducers} from "redux";
import AuthenticationReducer from './reducer-logged-in';
import ActionInfoReducer from './reducer-action-info'
import RessourceReducer from './reducer-ressources';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
    authentication: AuthenticationReducer,
    actionInfo: ActionInfoReducer,
    ressource: RessourceReducer,
    form
});

export default rootReducer