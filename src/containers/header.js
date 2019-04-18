import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/accueil">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ressources">Ressources</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.onClickAuthentication}>{this.renderAuthenticationLabel()}</a>
                </li>
            </ul>
        );
    }

    onClickAuthentication = () => {
        this.props.setAuthentication(!this.props.isLoggedIn);
    };

    renderAuthenticationLabel = () => {
        if (this.props.isLoggedIn) {
            return "Deconnexion";
        } else {
            return "Connexion";
        }
    };
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    }
};

export default connect(mapStateToProps, actions)(Header);