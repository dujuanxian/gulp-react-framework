import should from 'should';
import sinon from 'sinon';
import React from 'react/addons';
import Login from '../app/scripts/Login'

const TestUtils = React.addons.TestUtils;

describe('Login', function() {
    context('render', () => {
        let LoginComponent;

        beforeEach(() => {
            LoginComponent = TestUtils.renderIntoDocument(<Login/>);
        });

        it('should have username, password and button', () => {
            const username = LoginComponent.refs.form.props.children[0];
            const password = LoginComponent.refs.form.props.children[1];
            const button = LoginComponent.refs.form.props.children[2];

            username.props.name.should.be.eql('username');
            password.props.name.should.be.eql('password');
            button.props.name.should.be.eql('submit');
        });
    });
});
