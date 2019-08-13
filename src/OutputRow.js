import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
  height: 2rem;
  line-height: 2rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`


export default function OutputRow(props) {
  // 그래도 넘겨주는건 다 props로 넘어온다. 
  const { title } = props;
  return (
    <>
      <Li><span>{title}</span><StyledFontAwesomeIcon icon={faTimes} /></Li>
    </>
  );
}
