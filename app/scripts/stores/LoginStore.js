import React from 'react';
import Reflux from 'reflux';
import LoginAction from '../actions/LoginAction';

const LoginStore = Reflux.createStore({
    init() {
        this.loggedIn = false;
        this.listenTo(LoginAction.submit, this.onSubmit);
    },

    onSubmit(user) {
        this.loggedIn = true;
        this.trigger(user.username);
    }
});

export default LoginStore;