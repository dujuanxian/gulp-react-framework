'use strict';

import React from 'react';
import Login from './Login.jsx';

let App = React.createClass({
    render() {
        return (
            <Login/>
        )
    }
});

React.render(<App />, document.getElementById('app'));

