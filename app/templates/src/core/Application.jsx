import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Application is your application's wrapper.
// In here is where you would put your layout e.g. navigation, logo, etc

class Application extends Component {
    static propTypes = {
        children  : PropTypes.node,
        push      : PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <div>Example header found on all pages!</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => ({
    push: (url) => dispatch(push(url))
});

export default connect(null, dispatchToProps)(Application);
