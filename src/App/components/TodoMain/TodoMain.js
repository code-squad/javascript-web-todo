import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { requestUrl } from '../../../request_url'

// 하위 컴포넌트 임포트
import { TodoScore } from './TodoScore/TodoScore'
import { TodoInput } from './TodoInput/TodoInput'
import { TodoView } from './TodoView/TodoView'
import { TodoList } from './TodoList'
import { styles } from '../styles/styles'

const { StyledDivTodoMain } = styles;

// TodoMain 컴포넌트
class TodoMain extends React.Component {
    constructor(props) {
        super(props);
        this.todoKey = 1234;
        this.todoId = 1234;
        this.score = { todo: 0, done: 0, removed: 0 };
        this.state = {
            inputValue: "",
            todoList: [],
            foldState: false,
            foldMsg: "리스트 숨기기",
            viewState: false,
            viewMsg: "완료된 일만 보기"
        };

        // setState : input 값 업데이트
        this.updateInputChange = event => {
            const inputValue = event.target.value;
            this.setState(state =>
                ({ inputValue: inputValue}));
        }

        // setState : 할일 등록 업데이트
        this.updateNewTodo = () => {
            if (this.state.inputValue === '') return;
            const todoList = [...this.state.todoList]; // 새로운 객체 생성           
            todoList.unshift({ id: ++this.todoId, title: this.state.inputValue.trim(), status: "todo" });
            this.setState((state) => ({ todoList: todoList, inputValue: '' }));
        }

        // setSate : 할일 상태 업데이트
        this.updateTodo = event => {
            const id = Number(event.target.id);
            const status = event.target.name;
            const todoList = this.state.todoList.reduce((accumulator, todo) => {
                if (todo.id === id) {
                    todo.status = status;
                    accumulator.push(todo);
                } else {
                    accumulator.push(todo);
                }
                return accumulator;
            }, []);
            this.setState(state => ({
                todoList: todoList
            }));
        };

        // 할일 개수 업데이트(render에서 호출)
        this.updateTodoScore = () => {
            this.score = { todo: 0, done: 0, remove: 0 };
            this.state.todoList.forEach(todo => {
                if (todo.status === "todo") this.score['todo']++;
                if (todo.status === "done") this.score['done']++;
                if (todo.status === "remove") this.score['remove']++;
            })
        };

        // setState : 리스트 숨김, 펼침 제어, 상태 업데이트
        this.updateFoldState = () => {
            this.setState({ foldState: !this.state.foldState })
            this.state.foldState === true ? this.setState({ foldMsg: "리스트 숨기기" }) :
                this.setState({ foldMsg: "리스트 펼치기" });
        }

        this.updateViewState = () => {
            const viewState = this.state.viewState;
            viewState === true ? this.setState((state) => ({ viewState: !viewState, viewMsg: "할일만 보기" })) :
                this.setState((state) => ({ viewState: !viewState, viewMsg: "완료된 일만 보기" }));
        }
    }

    // 최초 렌더링 후 fetch 요청
    componentDidMount() {
        requestFetch(requestUrl).then(response => {
            const todoList = [];
            response.forEach(todo => { todoList.unshift({ id: ++this.todoId, title: todo.title, status: "todo" }) }
            )
            this.setState(state => ({
                todoList: todoList
            }));
        }).catch(err => new Error(`error ${err}`))
    }

    render() {
        const todoLiElement = this.state.todoList.map(todo =>
            <TodoList id={todo.id} key={todo.id} status={todo.status} updateTodoStatus={this.updateTodo}>
                {todo.title}
            </TodoList>
        );

        this.updateTodoScore();

        return (
            <Router>
                <StyledDivTodoMain>
                    <TodoScore className="todoScore" todoScore={this.score.todo} 
                        doneScore={this.score.done} removedScore={this.score.remove}
                    />
                    <TodoInput className="todoInput" inputValue={this.state.inputValue}
                        passInputChange={this.updateInputChange} passNewTodo={this.updateNewTodo}
                    />
                    <TodoView className="todoView" todoList={todoLiElement}
                        passFoldState={this.updateFoldState} foldState={this.state.foldState}
                        foldMsg={this.state.foldMsg} handleClick={this.updateViewState}
                        viewMsg={this.state.viewMsg} updateTodo={this.updateTodo}
                    />
                </StyledDivTodoMain>
            </Router>
        );
    }
}

// fetch 요청
async function requestFetch(requestUrl) {
    try {
        const response = await fetch(requestUrl, { mode: "cors" });
        const todoListObj = await response.json();
        return todoListObj.body;
    } catch (err) {
        return new Error(`err. ${err}`);
    }
}

export { TodoMain }; 