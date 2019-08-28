import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import config from "../config";

const TodoButton = props => (
  <StyledButton
    onClick={props.clickHandler}
    absolute={props.absolute}
    top={props.top}
    right={props.right}
    width={props.width}
    height={props.height}
    borderRadius={props.borderRadius}
  >
    {props.name}
  </StyledButton>
);

TodoButton.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};

const StyledButton = styled.button`
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
  border: 1px solid ${config.themeColor};
  outline: none;
  cursor: pointer;
  color: ${config.themeColor};
  position: ${props => (props.absolute ? "absolute" : "static")};
  top: ${props => (props.absolute ? props.top : "0")};
  right: ${props => (props.absolute ? props.right : "0")};

  &:active {
    background-color: #579bde;
  }
`;

export default TodoButton;
