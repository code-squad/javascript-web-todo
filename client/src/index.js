import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.querySelector("#root")
);
