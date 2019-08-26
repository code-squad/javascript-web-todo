import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  min-height: 300px;
  color: #05386b;
`

const MainLayout = ({ children }) => {
  return (
    <Div>
      { children }
    </Div>
  )
}

export default MainLayout;
