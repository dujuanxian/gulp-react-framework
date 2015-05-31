import React from 'react';
import Reflux from 'reflux';

import LoginStore from './stores/LoginStore';
import Login from './Login.jsx';
import Welcome from './Welcome.jsx';

const App = React.createClass({
    mixins: [
        Reflux.listenTo(LoginStore, 'onLoggedIn')
    ],

    getInitialState() {
        return {loggedIn: false};
    },

    render() {
        return (
            !this.state.loggedIn ?
                <Login /> :
                <Welcome />
        );
    },

    onLoggedIn() {
        this.setState({loggedIn: true})
    }
});

React.render(<App />, document.getElementById('app'));

