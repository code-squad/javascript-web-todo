import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateProvider } from "./StateHelper/TodoState";
import styled from "styled-components";
''
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
      <Link to={ACCESS_PATH}>Home</Link>
    </li>
    <li>
      <Link to={ACCESS_PATH+ "list"}>할일관리</Link>
    </li>
    <li>
      <Link to={ACCESS_PATH+"about"}>about</Link>
    </li>
  </NavUl>
);

export default function TodoApp() {
  console.log("ACCESS_PATH",ACCESS_PATH);
  return (
    <Router>
      <StateProvider>
        <Navbar />
        <Route exact path={ACCESS_PATH} component={Home} />
        <Route path={ACCESS_PATH+"list"} component={TodoManage} />
        <Route path={ACCESS_PATH+ "about"} component={About} />
      </StateProvider>
    </Router>
  );
}
