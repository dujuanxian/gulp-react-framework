import React from 'react';
import Reflux from 'reflux';
import LoginAction from '../actions/LoginAction';

const LoginStore = Reflux.createStore({
    init() {
        this.loggedIn = false;
        this.listenTo(LoginAction.submit, this.onSubmit);
    },

    onSubmit() {
        this.loggedIn = true;
        this.trigger();
    }
});

export default LoginStore;