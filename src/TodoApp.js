import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateProvider } from "./StateHelper/TodoState";
import styled from "styled-components";

import TodoList from "./Todo/TodoList";
import InputBar from "./Todo/Header/InputBar";
import ResultBar from "./Todo/Header/ResultBar";
import Home from "./Home.jsx";
import About from "./About.jsx";

const TodoManage = () => (
  <>
    <ResultBar />
    <InputBar />
    <TodoList />
  </>
);

const NavUl = styled.ul`
  display: flex;
  padding: 0rem;
  width: 100%;
  li {
    list-style-type: none;
    justify-content: center;
    width: 100%;
    display: flex;
    a {
      color: gray;
      :visited {
        color: gray;
      }
      :hover {
        color: hotpink;
      }
      justify-content: center;
      font-size: 2rem;
      text-decoration: none;
  }
`;

const Navbar = () => (
  <NavUl>
    <li>
      <Link to="home">Home</Link>
    </li>
    <li>
      <Link to="list">할일관리</Link>
    </li>
    <li>
      <Link to="about">about</Link>
    </li>
  </NavUl>
);

export default function TodoApp() {
  return (
    <Router>
      <StateProvider>
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/list/" component={TodoManage} />
      </StateProvider>
    </Router>
  );
}
