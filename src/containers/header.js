import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ressources</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.onClickAuthentication}>{this.renderAuthenticationLabel()}</a>
                    </li>
                </ul>
            </div>
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