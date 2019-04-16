import React, {Component} from 'react';
import Header from '../containers/header';
import {Route, Switch} from 'react-router-dom';
import Home from "./home";
import Ressources from "./ressources";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route path="/accueil" component={Home} />
                <Route path="/ressources" component={Ressources} />
            </div>
        );
    }
}

export default App;