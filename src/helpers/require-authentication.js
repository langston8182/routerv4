import React, {Component} from 'react';
import {connect} from "react-redux";

export default function(ChildComponent) {
    class RequireAuthentication extends Component {
        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        render() {
            return <ChildComponent/>;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.authentication.isLoggedIn
        }
    };

    return connect(mapStateToProps)(RequireAuthentication);
}