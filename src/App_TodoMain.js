import React from 'react';
import { styles } from './styles'
import { requestUrl } from './request_url'

// 하위 컴포넌트 임포트
import { LiElement } from './App_TodoMain_LiElement'
import { AddTodo } from './App_AddTodo'
import { TodoListView } from './App_TodoListView'


// TodoMain 컴포넌트
class TodoMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            todoList: [],
            foldState: false,
            foldMsg: "리스트 숨기기"
        };
        this.todoKey = 0;
        this.tempTodoList = [];
        this.updateInputChange = this.updateInputChange.bind(this);
        this.updateNewTodo = this.updateNewTodo.bind(this);
        this.updateRemovedTodo = this.updateRemovedTodo.bind(this);
        this.updateFoldState = this.updateFoldState.bind(this);
    }

    // setState : input 값 업데이트
    updateInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    // setState : 할일 추가 업데이트
    updateNewTodo() {
        const JSXLiList =
            <LiElement id={++this.todoKey} key={this.todoKey} passTodoToBeRemoved={this.updateRemovedTodo}>
                {this.state.inputValue}
            </LiElement>
        this.tempTodoList.unshift(JSXLiList);
        this.setState({ todoList: this.tempTodoList });
    }

    // setState : 할일 삭제 업데이트
    updateRemovedTodo(event) {
        const id = event.target.id;
        this.tempTodoList = this.tempTodoList.reduce((accumulator, todo) => {
            if (todo.key !== id) {
                accumulator.push(todo);
            }
            return accumulator;
        }, []);
        this.setState({ todoList: this.tempTodoList })
    }

    // setState : 리스트 숨김, 펼침 제어, 상태 업데이트
    updateFoldState() {
        this.setState({ foldState: !this.state.foldState })
        this.state.foldState === true ? this.setState({ foldMsg: "리스트 숨기기" }) :
            this.setState({ foldMsg: "리스트 펼치기" });
    }

    // 최초 렌더링 후 fetch 요청
    componentDidMount() {
        requestFetch(requestUrl).then(response => {
            return response.map(todoValue =>
                <LiElement id={++this.todoKey} key={this.todoKey} passTodoToBeRemoved={this.updateRemovedTodo}>
                    {todoValue['title']}
                </LiElement>)
        }).then(responseArr => {
            responseArr.forEach(v => this.tempTodoList.unshift(v));
            this.setState({ todoList: this.tempTodoList });
        }).catch(err => new Error(`error ${err}`))
    }

    render() {
        return (
            <styles.StyledDivTodoMain>
                <AddTodo className="addTodo" passInputChange={this.updateInputChange} passNewTodo={this.updateNewTodo} />
                <TodoListView className="todoList" todoList={this.state.todoList}
                    passFoldState={this.updateFoldState} foldState={this.state.foldState} foldMsg={this.state.foldMsg} />
            </styles.StyledDivTodoMain>
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