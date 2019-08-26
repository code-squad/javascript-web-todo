import React, { Component } from "react";
import theme from "../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProvider } from "styled-components";

class Button extends Component {
  render() {
    const { btnName } = this.props;
    return (
      <ThemeProvider theme={theme.deepblue}>
        <StyledButton>
          {btnName ? btnName : <FontAwesomeIcon icon={faPencilAlt} />}
        </StyledButton>
      </ThemeProvider>
    );
  }
}

const StyledButton = styled.button`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.default};
  width: 2rem;
  height: 2rem;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.default};
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    font-weight: 500;
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.sub};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
