import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addRessource} from "../actions";

const FIELDS = {
    email: "email",
    password: "password"
};

class SigninForm extends Component {
    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="row justify-content-md-center">
                    <h1>Connexion</h1>
                </div>
                <div className="row justify-content-md-center">
                    <fieldset className="col-md-4 form-group">
                        <label className="bmd-label-floating">
                            Email
                        </label>
                        <Field
                            name={FIELDS.email}
                            component="input"
                            type="text"
                            className="form-control"
                        />
                    </fieldset>
                </div>
                <div className="row justify-content-md-center">
                    <fieldset className="col-md-4 form-group">
                        <label className="bmd-label-floating">
                            Mot de passe
                        </label>
                        <Field
                            name={FIELDS.password}
                            component="input"
                            type="password"
                            className="form-control"
                        />
                    </fieldset>
                </div>
                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised">
                        Connexion
                    </button>
                </div>
            </form>
        );
    }
}

const signinForm = reduxForm({
    form: "signin",
    fields: Object.keys(FIELDS)
})(SigninForm);

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(signinForm);