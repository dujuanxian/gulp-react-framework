import React from 'react';

import LoginAction from './actions/LoginAction'

const Login = React.createClass({
    getInitialState() {
        return {
            username: '',
            password: '',
            showErrorMsg: false
        };
    },

    render() {
        return (
            <div>
                {this.state.showErrorMsg? <p ref="errorMsg">Your username or password is invalid</p> : null}

                <form ref="form" onSubmit={this.handleSubmit}>
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
            </div>
        );
    },

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    },

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    },

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.username.length !== 0 && this.state.password.length !== 0) {
            LoginAction.submit({
                username: this.state.username,
                password: this.state.password
            });
        } else {
            this.setState({showErrorMsg: true});
        }
    }
});

export default Login;
