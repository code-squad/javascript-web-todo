import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 2rem;
`;

class WarningModal extends Component {
  render() {
    if (this.props.visible) {
      return <Div>{this.props.children}</Div>;
    }
    return null;
  }
}

export default WarningModal;
