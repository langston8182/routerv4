import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './components/app';
import {BrowserRouter} from "react-router-dom";
import {actionCounter} from "./middlewares/action-counter";
import {setAuthentication} from "./actions";

const invariant = require("redux-immutable-state-invariant").default();

const createStoreWithMiddleware = applyMiddleware(invariant, thunk, actionCounter)(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem("token");
if (token) {
    store.dispatch(setAuthentication(true));
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
