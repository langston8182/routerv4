import React, {Component} from 'react';
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import Home from "./home";
import Ressources from "../containers/ressources";
import requireAuth from '../helpers/require-authentication';
import TodoApp from './todo-app';
import SigninForm from '../containers/signin';
import Signout from '../containers/signout';
require("../style.css");

class App extends Component {
    render() {
        return (
            <div className="container body_content">
                <Header />
                <div className="container body_content">
                    <Switch>
                        <Route exact path="/" component={TodoApp} />
                        <Route exact path="/accueil" component={Home} />
                        <Route path="/ressources" component={requireAuth(Ressources)} />
                        <Route exact path="/signin" component={SigninForm}/>
                        <Route exact path="/signout" component={Signout} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;