import React from 'react';

const Welcome = React.createClass({
    render() {
        return (
            <div>Hi {this.props.username}, Welcome!</div>
        );
    }
});

export default Welcome;
