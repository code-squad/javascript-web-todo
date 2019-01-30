import React, { Component } from "react";
import styled from "styled-components";
import "styled-components/macro";
import _asyncGetTodoJson from "./Lib.network";

export class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    this.placeholder = props.placeholder;
  }

  render() {
    return (
      <div className={this.className}>
        <input placeholder={this.placeholder} css="" type="text" />
        <button>{`Add Item`}</button>
      </div>
    );
  }
}

export class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
  }

  render() {
    return (
      <header className={this.className}>
        <h1>{`To-Do List`}</h1>
        <p>{`Every big dish starts with one small bite`}</p>
      </header>
    );
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
  }

  render() {
    return (
      <li className={this.className}>
        <span>{this.props.todoTitle}</span>
        <button>{`X`}</button>
      </li>
    );
  }
}

const StyledTodoItem = styled(TodoItem)`
  display: grid;
  grid-template-columns: auto 10%;
  grid-template-rows: 10% auto 10%;
  padding: 1rem;
  margin: 1rem auto;
  background-color: white;

  span {
    grid-column: 1;
    grid-row: 2;
  }
  button {
    grid-column: 2;
    grid-row: 2;
    color: red;
    border: none;
    background: none;
    font-size: 2rem;
  }
`;

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    this.apiURI = props.apiURI;
    //json: [{title(str), id(int), status(str)}]
    this.state = { json: [] };
  }

  componentDidMount() {
    _asyncGetTodoJson(this.apiURI).then(json => this.setState({ json }));
  }

  render() {
    if (!this.state.json[0])
      return (
        <div css="place-self: center;" className={this.className}>
          Loading...
        </div>
      );

    return (
      <div className={this.className}>
        <h2>{`Things to Do`}</h2>
        <button>{`Fold`}</button>
        <ul>
          {this.state.json.map((item, idx) => (
            <StyledTodoItem
              key={item.id ? item.id : idx}
              todoTitle={item.title}
            />
          ))}
        </ul>
      </div>
    );
  }
}
