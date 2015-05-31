import should from 'should';
import sinon from 'sinon';
import React from 'react/addons';

import Login from '../app/scripts/Login'
import LoginAction from '../app/scripts/actions/LoginAction'
import LoginStore from '../app/scripts/stores/LoginStore'

const TestUtils = React.addons.TestUtils;

describe('Login', function() {
    let LoginComponent, username, password, button;

    beforeEach(() => {
        LoginComponent = TestUtils.renderIntoDocument(<Login/>);
        username = LoginComponent.refs.username;
        password = LoginComponent.refs.password;
        button = LoginComponent.refs.button;
    });

    it('should store loggedIn status when login succeed', () => {
        const user = {
            username: 'test',
            password: 'pass'
        };

        TestUtils.Simulate.change(username.getDOMNode(), {target: {value: user.username}});
        TestUtils.Simulate.change(password.getDOMNode(), {target: {value: user.password}});

        TestUtils.Simulate.submit(LoginComponent.refs.form);

        LoginStore.loggedIn.should.be.true;
    });
});
