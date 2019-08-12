import React from "react";
import styled from "styled-components";

import TodoAdd from "./components/TodoAdd";
import TodoContent from "./components/TodoContent";

const StyledRoot = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px solid #2196f3;
  border-radius: 0.4rem;
  padding: 1rem;
`;

const Root = _ => {
  return (
    <StyledRoot>
      <TodoAdd />
      <TodoContent />
    </StyledRoot>
  );
};

export default Root;
