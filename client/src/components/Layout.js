import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Nav from "./Nav";

const StyledLayout = styled.div`
  width: 480px;
  margin: 0 auto;
  &,
  & * {
    box-sizing: border-box;
  }

  & a {
    text-decoration: none;
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Nav />
      {children}
    </StyledLayout>
  );
}

// Layout.propTypes = {
//   children: PropTypes.object
// };
