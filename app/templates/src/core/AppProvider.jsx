import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

// in this class you can set up other state management components
// e.g. redux-persist

export default class AppProvider extends Component {
    static propTypes = {
        store   : PropTypes.object.isRequired,
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                {this.props.children}
            </Provider>
        );
    }
}
