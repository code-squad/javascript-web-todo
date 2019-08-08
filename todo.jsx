import React, { Component } from 'react';

class ToDo extends Component {
    state = {
        name: 'koon!!!'
    };

    render() {
        return <h1>{this.state.name}</h1>;
    }
}

export default ToDo;