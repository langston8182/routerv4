import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import * as validation from '../validations/index';
import {signupUser} from "../actions";

const FIELDS = {email: "email", password: "password", secondPassword: "secondPassword"};

class SignupForm extends Component {

    renderInputComponent = field => {
        return (
            <div className="row justify-content-md-center">
                <fieldset className="col-md-4 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <input {...field.input} type={field.type} className="form-control" />
                    {
                        field.meta.touched && field.meta.error &&
                        <span className="error">{field.meta.error}</span>
                    }
                </fieldset>
            </div>
        );
    };

    handleSubmit(credential) {
        this.props.signupUser(credential, this.props.history);
    }

    render() {
        const {handleSubmit, fields} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <div className="row justify-content-md-center">
                    <h1>Inscription</h1>
                </div>
                <Field
                    name={FIELDS.email}
                    component={this.renderInputComponent}
                    type="text"
                    label="email"
                />
                <Field
                    name={FIELDS.password}
                    component={this.renderInputComponent}
                    type="password"
                    label="Mot de passe"
                />
                <Field
                    name={FIELDS.secondPassword}
                    component={this.renderInputComponent}
                    type="password"
                    label="Mot de passe (repetez)"
                />
                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised">Inscription</button>
                </div>
            </form>
        );
    }
}

function validate(formValues) {
    const errors = {};
    errors.email = validation.validateEmail(formValues.email);
    errors.password = validation.validateNotEmpty(formValues.password);
    errors.secondPassword = validation.validateEqual(formValues.password, formValues.secondPassword);
    return errors;
}

const signupForm = reduxForm({
    form: "signupForm",
    fields: Object.keys(FIELDS),
    validate
})(SignupForm);

const mapDispatchToProps = {
    signupUser
};

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(signupForm);