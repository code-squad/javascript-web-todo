import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

class Item extends Component {
  render() {
    const { itemName, key } = this.props;
    return (
      <li>
        <StyledItem key={key}>
          <Title>{itemName}</Title>
          <StyledIcon>
            <FontAwesomeIcon icon={faTimes} />
          </StyledIcon>
        </StyledItem>
      </li>
    );
  }
}

const StyledItem = styled.div`
  display: flex;
`;
const Title = styled.span`
  flex: 1;
`;

const StyledIcon = styled.div`
  cursor: pointer;
`;

export default Item;
