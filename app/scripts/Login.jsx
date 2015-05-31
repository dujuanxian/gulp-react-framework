import React from 'react';

import LoginAction from './actions/LoginAction'

const Login = React.createClass({
    getInitialState() {
        return {
            username: '',
            password: ''
        };
    },

    render() {
        return (
            <form ref="form">
                <input
                    ref="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    autofocus = "autofocus"
                    value={this.state.username}
                    onChange={this.onUsernameChange}
                />
                <input
                    ref="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />
                <button
                    ref="button"
                    type="submit"
                    name="submit">
                    Login
                </button>
            </form>
        );
    },

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    },

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    },

    }
});

export default Login;
