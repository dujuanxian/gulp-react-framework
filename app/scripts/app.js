import React from 'react';

import Home from './Home.jsx';

const App = React.createClass({
    render() {
        return (<Home />);
    }
});

React.render(<App />, document.getElementById('app'));

