import React, { Component } from "react";
import theme from "../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProvider } from "styled-components";

class Button extends Component {
  render() {
    const { btnName } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledButton>
          {btnName ? btnName : <FontAwesomeIcon icon={faPencilAlt} />}
        </StyledButton>
      </ThemeProvider>
    );
  }
}

const StyledButton = styled.button`
  background: #fff;
  color: #0080ff;
  width: 2rem;
  height: 2rem;
  box-sizing: border-box;
  border: 1px solid #0080ff;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    background-color: #0062c3;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
