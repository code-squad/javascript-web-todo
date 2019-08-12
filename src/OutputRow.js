import React, { Component } from "react";
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

export default class OutputRow extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <Li><span>{title}</span><StyledFontAwesomeIcon icon={faTimes} /></Li>
      </>
    );
  }
}
