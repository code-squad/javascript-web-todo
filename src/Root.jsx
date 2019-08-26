import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/todo/" component={App} />
          <Route path="/about/" component={About} />
        </Wrapper>
      </Router>
    </>
  );
};
export default Root;
