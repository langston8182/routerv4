import React, {Component} from 'react';
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import Home from "./home";
import Ressources from "../containers/ressources";
import requireAuth from '../helpers/require-authentication';
require("../style.css");

class App extends Component {
    render() {
        return (
            <div className="container body_content">
                <Header />
                <Switch>
                    <Route exact path="/" component={Ressources} />
                    <Route exact path="/accueil" component={Home} />
                    <Route path="/ressources" component={requireAuth(Ressources)} />
                </Switch>
            </div>
        );
    }
}

export default App;