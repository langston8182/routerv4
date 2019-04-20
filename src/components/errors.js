import React, {Component} from 'react';
import {connect} from 'react-redux';
import {resetError} from "../actions";
import {withRouter} from 'react-router';

class Errors extends Component {
    componentWillUpdate(nextProps) {
        if (this.props.location !== nextProps.location) {
            this.props.resetError();
        }
    }

    render() {
        return (
            this.props.error &&
            <div className="alert alert-danger" role="alert">
                {this.props.error}
            </div>
        );
    }
}

const mapDispatchToProps = {
    resetError
};

const mapStateToProps = (state) => {
    return {
        error: state.errors.message
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Errors));