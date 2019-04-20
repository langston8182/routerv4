import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from "react-router-dom";

class Header extends Component {
    renderAuthenticationLink = () => {
        if (this.props.isLoggedIn) {
            return (
                <li className="nav-item">
                    <Link className="nav-link"
                          to={"/signout"}>
                        Deconnexion
                    </Link>
                </li>
            );
        } else {
            return (
                [
                    <li key={1} className="nav-item">
                        <Link className="nav-link" to={"/signin"}>Connexion</Link>
                    </li>,
                    <li key={2} className="nav-item">
                        <Link className="nav-link" to={"/signup"}>Inscription</Link>
                    </li>
                ]
            );
        }
    };

    render() {
        return (
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/accueil">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ressources">Ressources</Link>
                </li>
                {this.renderAuthenticationLink()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    }
};

export default connect(mapStateToProps, actions)(Header);