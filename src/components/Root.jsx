import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "./App";
import Home from "./Home";
import About from "./About";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
`;

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/todo/">할일관리</Link>
              </li>
              <li>
                <Link to="/about/">ABOUT</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/todo/" component={App} />
          <Route path="/about/" component={About} />
        </>
      </Router>
    </>
  );
};

export default Root;
