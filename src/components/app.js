import React, {Component} from 'react';
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import Home from "./home";
import Ressources from "./ressources";
import requireAuth from '../helpers/require-authentication';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/accueil" component={Home} />
                    <Route path="/ressources" component={requireAuth(Ressources)} />
                </Switch>
            </div>
        );
    }
}

export default App;