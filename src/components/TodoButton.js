import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import config from "../config";

const Button = styled.button`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: ${props =>
    props.width ? props.width : config.buttonDefaultStyle.width};
  height: ${props =>
    props.height ? props.height : config.buttonDefaultStyle.height};
  border-radius: ${props =>
    props.borderRadius
      ? props.borderRadius
      : config.buttonDefaultStyle.borderRadius};
  font-family: inherit;
  padding: 0;
  border: 1px solid #428eda;
  outline: none;
  cursor: pointer;
  color: #428eda;
  position: ${props => (props.absolute ? "absolute" : "static")};
  top: 0.2rem;
  right: 1rem;

  &:active {
    background-color: #579bde;
  }
`;

class TodoButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        onClick={this.props.clickHandler}
        absolute={this.props.absolute}
        width={this.props.width}
        height={this.props.height}
        borderRadius={this.props.borderRadius}
      >
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
