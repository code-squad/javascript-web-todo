import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 4rem;
  height: 1.8rem;
  border-radius: 0.25rem;
  font-family: inherit;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  border-color: #78cff6;
  color: 78cff6;
  position: ${props => (props.absolute ? "absolute" : "static")};
  top: 0.2rem;
  right: 0.2rem;

  &:active {
    background-color: #ccc;
  }
`;

class TodoButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button onClick={this.props.clickHandler} absolute={this.props.absolute}>
        {this.props.name}
      </Button>
    );
  }
}

TodoButton.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};

export default TodoButton;
