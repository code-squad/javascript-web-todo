import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList";
import styled from 'styled-components';

const StyledTodoList = styled(TodoList)`
    padding: 10px;
    background-color: #adced2;
`;

const StyledLi = styled.li`
    padding: 5px 0;
`;
const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #040404;
    padding: 5px 10px;
    background-color: #adced2;
`;

export default function TodoTabs(props){
    return (
    <Router>
        <ul className={props.className}>
            <StyledLi>
                <StyledLink exact to="/list/todo">할일</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink to="/list/complete">끝난일</StyledLink>
            </StyledLi>
        </ul>
        <Route exact path="/list/:status" render={(arg) => {
            return <StyledTodoList {...props} className={StyledTodoList} currentStatus={arg.match.params.status} isAuthed={true}/>;
        }} />
    </Router>
    )
}