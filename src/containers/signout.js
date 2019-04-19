import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signoutUser} from "../actions";

class Signout extends Component {

    componentWillMount() {
        this.props.signoutUser();
    }


    render() {
        return (
            <div>
                Au revoir
            </div>
        );
    }
}

const mapDispatchToProps = {
    signoutUser
};

export default connect(null, mapDispatchToProps)(Signout);