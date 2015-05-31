import React from 'react';

const Login = React.createClass({
    render() {
        return (
            <form ref="form">
                <input type="text" name="username" placeholder="Username" autofocus = "autofocus" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit" name="submit"> Login </button>
            </form>
        );
    }
});

export default Login;
