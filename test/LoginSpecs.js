import should from 'should';
import sinon from 'sinon';
import React from 'react/addons';

import Login from '../app/scripts/Login'

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

});
