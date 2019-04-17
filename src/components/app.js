import React, {Component} from 'react';
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import Home from "./home";
import Ressources from "./ressources";
import requireAuth from '../helpers/require-authentication';
import TodoApp from './todo-app';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container body_content">
                    <Switch>
                        <Route exact path="/" component={TodoApp} />
                        <Route exact path="/accueil" component={Home} />
                        <Route path="/ressources" component={requireAuth(Ressources)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;