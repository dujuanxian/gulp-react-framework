import should from 'should';
import sinon from 'sinon';
import React from 'react/addons';
import Reflux from 'reflux';

import LoginAction from '../../app/scripts/actions/LoginAction'
import LoginStore from '../../app/scripts/stores/LoginStore'

describe('LoginStore', function() {
    context('#onSubmit', () => {
        it('should set loggedIn true when listen loginAction submit', () => {
            LoginAction.submit = sinon.spy();
            LoginStore.listen(LoginAction.submit());

            LoginStore.loggedIn.should.be.true;
            LoginStore.trigger.should.be.called;
        });
    });

});
