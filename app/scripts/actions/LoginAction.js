import React from 'react';
import Reflux from 'reflux';

const LoginAction = Reflux.createActions({
    submit: {sync: true}
});

export default LoginAction;