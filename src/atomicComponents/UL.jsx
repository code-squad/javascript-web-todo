import React, { Component } from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  padding-left: 2rem;
`;

const Li = styled.li`
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 20rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: palevioletred;

  :hover ::after {
    content: "❌";
  }
`;

class UL extends Component {
  getLists = (contents, contentKey) => {
    return contents.map((v, i) => <Li key={v.id || i}>{v[contentKey] || v.title}</Li>);
  };

  render() {
    const { contents, contentKey } = this.props;
    return <StyledUL>{this.getLists(contents, contentKey)}</StyledUL>;
  }
}

export default UL;
