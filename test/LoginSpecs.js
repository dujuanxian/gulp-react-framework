import should from 'should';
import sinon from 'sinon';
import React from 'react/addons';

import Login from '../app/scripts/Login'
import LoginAction from '../app/scripts/actions/LoginAction'

const TestUtils = React.addons.TestUtils;

describe('Login', function() {
    let LoginComponent, username, password, button;

    beforeEach(() => {
        LoginComponent = TestUtils.renderIntoDocument(<Login/>);
        username = LoginComponent.refs.username;
        password = LoginComponent.refs.password;
        button = LoginComponent.refs.button;
    });

    context('render', () => {
        it('should have username, password and button', () => {
            username.props.name.should.be.eql('username');
            password.props.name.should.be.eql('password');
            button.props.name.should.be.eql('submit');
        });
    });

    context('#onUsernameChange', () => {
        it('should get username value when input change', () => {
            TestUtils.Simulate.change(username.getDOMNode(), {target: {value: 'test'}});
            LoginComponent.state.username.should.be.eql('test');
        });
    });

    context('#onPasswordChange', () => {
        it('should get password value when input change', () => {
            TestUtils.Simulate.change(password.getDOMNode(), {target: {value: 'test'}});
            LoginComponent.state.password.should.be.eql('test');
        });
    });

    context('#handleSubmit', () => {
        it('should call submit action when username and password is valid', () => {
            const loginAction = sinon.stub(LoginAction, 'submit');

            TestUtils.Simulate.change(username.getDOMNode(), {target: {value: 'valid username'}});
            TestUtils.Simulate.change(password.getDOMNode(), {target: {value: 'valid password'}});

            TestUtils.Simulate.submit(LoginComponent.refs.form);

            loginAction.called.should.be.true;
        });

        it('should show error msg when username or password is invalid', () => {
            TestUtils.Simulate.submit(LoginComponent.refs.form);
            LoginComponent.refs.errorMsg.getDOMNode().textContent.should.be.eql('Your username or password is invalid');
        });
    });
});
