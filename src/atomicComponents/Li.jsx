import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 20rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: palevioletred;
  text-decoration: ${props => (props.textDeco === "done" ? "line-through" : "none")};
  text-decoration-color: black;
`;

const Li = props => {
  const { contents, contentKey, ...restProps } = props;
  return contents.map((v, i) => (
    <StyledLi {...restProps} textDeco={v.status} key={v.id || i} data-id={v.id || i}>
      {v[contentKey] || v.title}
      {props.children}
    </StyledLi>
  ));
};

export default Li;
