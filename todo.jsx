const React = require('react');
const { Component } = React;

class ToDo extends Component {
    state = {
        name: 'koon'
    };

    render() {
        return <h1>{this.state.name}</h1>;
    }
}

module.exports = ToDo;