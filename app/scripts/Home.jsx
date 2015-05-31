import React from 'react';
import Reflux from 'reflux';

import LoginStore from './stores/LoginStore';
import Login from './Login.jsx';
import Welcome from './Welcome.jsx';

const Home = React.createClass({
    mixins: [
        Reflux.listenTo(LoginStore, 'onLoggedIn')
    ],

    getInitialState() {
        return {
            loggedIn: false,
            username: ''
        };
    },

    render() {
        return (
            !this.state.loggedIn ?
                <Login /> :
                <Welcome username={this.state.username} />
        );
    },

    onLoggedIn(username) {
        this.setState({loggedIn: true, username: username})
    }
});

export default Home;

