import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// 하위 컴포넌트 임포트
import { FoldButton } from './FoldButton'
import { TodoListView } from './ListView/TodoListView'
import { CompleteListView } from './ListView/CompleteListView'
import { RemovedListView } from './ListView/RemovedListView'
// import { TodoList } from '../TodoList'
import { TabMenu } from './TabMenu'

import { styles } from '../../styles/styles'
const { StyledDivListView, StyledDiv, StyledDivTodoList } = styles;


// TodoList View 컴포넌트
class TodoView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () =>
            this.props.handleClick()
        this.handleClickFolded = () =>
            this.props.passFoldState()
        this.updateTodo = (event) =>
            this.props.updateTodo(event);


        this.filterByStatus = (todoStatus) => {
            const todoLiElement = this.props.todoList;
            const filteredList = todoLiElement.filter(todo =>
                todo.props.status === todoStatus);
            return filteredList;
        }
    }

    render() {
        return (
            <Router>
                <StyledDivListView>
                    <StyledDiv>
                        <TabMenu />
                        <FoldButton handleClickFolded={this.handleClickFolded}>
                            {this.props.foldMsg}
                        </FoldButton>
                    </StyledDiv>

                    {this.props.foldState ?
                        "" :
                        <StyledDivTodoList>
                            <Route path="/list/todo/" render={() => (
                                <TodoListView todoList={this.props.todoList} updateTodo={this.props.updateTodo}
                                    filterByStatus={this.filterByStatus} todoStatus="todo" />
                            )} />
                            <Route path="/list/complete/" render={() => (
                                <CompleteListView todoList={this.props.todoList} updateTodo={this.props.updateTodo}
                                    filterByStatus={this.filterByStatus} todoStatus="done" />
                            )} />
                            <Route path="/list/removed/" render={() => (
                                <RemovedListView todoList={this.props.todoList} updateTodo={this.props.updateTodo}
                                    filterByStatus={this.filterByStatus} todoStatus="remove" />
                            )} />
                        </StyledDivTodoList>
                    }
                </StyledDivListView>
            </Router>
        );
    }
}

export { TodoView }