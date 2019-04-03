import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// 하위 컴포넌트 임포트
import { FoldButton } from './FoldButton'
import { TodoTabMenu } from './TodoTabMenu'
import { FilteredListView } from './ListView/FilteredListView'
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
        this.updateTodoStatus = (event) =>
            this.props.updateTodoStatus(event);

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
                        <Route path="/list/:id" component={TodoTabMenu} />
                        <FoldButton handleClickFolded={this.handleClickFolded}>
                            {this.props.foldMsg}
                        </FoldButton>
                    </StyledDiv>

                    {this.props.foldState ?
                        "" :
                        <StyledDivTodoList>
                            <Route path="/list/:id" render={({match}) => (
                                <FilteredListView todoList={this.props.todoList} updateTodoStatus={this.props.updateTodoStatus}
                                    filterByStatus={this.filterByStatus} match={match} />
                            )} />
                        </StyledDivTodoList>
                    }
                </StyledDivListView>
            </Router>
        );
    }
}

export { TodoView }