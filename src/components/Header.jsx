import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Todo</Title>
        <StyledIcon>
          <FontAwesomeIcon icon={faChevronDown} />
        </StyledIcon>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h2`
  flex: 1;
  margin: 0;
  line-height: 2rem;
`;

const StyledIcon = styled.div`
  cursor: pointer;
`;

export default Header;
