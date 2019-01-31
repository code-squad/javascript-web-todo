import React, { Component } from 'react';
import styled from 'styled-components';
import _asyncGetJson from '../../library/network';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    this.apiURI = props.apiURI;
    this.ItemTemplate = props.ItemTemplate;
    // json: [{title(str), id(int), status(str)}]
    this.state = { todoData: [] };
  }

  componentDidMount() {
    _asyncGetJson(this.apiURI).then(todoData => this.setState({ todoData }));
  }

  render() {
    if (!this.state.todoData[0]) {
      return (
        <div css="place-self: center;" className={this.className}>
          Loading...
        </div>
      );
    }

    return (
      <div className={this.className}>
        <h2>Things to Do</h2>
        <button type="button">Fold</button>
        <ul>
          {this.state.todoData.map((item, idx) => (
            <this.ItemTemplate key={item.id ? item.id : idx} todoTitle={item.title} />
          ))}
        </ul>
      </div>
    );
  }
}
