import React from 'react';
import { styles } from './styles'
import { requestUrl } from './request_url'

// 하위 컴포넌트 임포트
import { TodoScore } from './App_TodoScore'
import { AddTodo } from './App_AddTodo'
import { TodoListView } from './App_TodoListView'
import { LiElement } from './App_TodoMain_LiElement'

// TodoMain 컴포넌트
class TodoMain extends React.Component {
    constructor(props) {
        super(props);
        this.todoKey = 1234;
        this.todoId = 1234;
        this.tempTodoList = [];
        this.tempDoneTodoList = [];
        this.tempRemovedTodoList = [];
        this.state = {
            inputValue: "",
            todoList: [],
            doneList: [],
            removedList: [],
            todoNumber: this.tempTodoList.length,
            doneTodoNumber: this.tempDoneTodoList.length,
            removedTodoNumber: this.tempRemovedTodoList.length,
            foldState: false,
            foldMsg: "리스트 숨기기"
        };

        // setState : input 값 업데이트
        this.updateInputChange = event =>
            this.setState({ inputValue: event.target.value });


        // setState : 할일 등록 업데이트
        this.updateNewTodo = () => {
            const tempObj = { title: this.state.inputValue, id: ++this.todoId, status: "todo" };
            this.tempTodoList.unshift(tempObj);
            this.setState({ todoList: this.tempTodoList, todoNumber: this.tempTodoList.length });
        }

        // setState : 할일 완료, 삭제 업데이트
        this.updateTodo = event => {
            const id = event.target.id; // id는 문자열
            const status = event.target.name;
            this.tempTodoList = this.tempTodoList.reduce((accumulator, todo) => {
                if (todo.id.toString() !== id) accumulator.push(todo);
                else this.updateStatus(todo, status);
                return accumulator;
            }, []);
            this.setState({
                todoList: this.tempTodoList,
                doneList: this.tempDoneTodoList,
                removedList: this.tempRemovedTodoList
            });
            this.updateTodoScore();
        }

        // setState : 할일 개수 업데이트
        this.updateTodoScore = () => {
            this.setState({
                todoNumber: this.tempTodoList.length,
                doneTodoNumber: this.tempDoneTodoList.length,
                removedTodoNumber: this.tempRemovedTodoList.length
            })
        }

        // setState : 리스트 숨김, 펼침 제어, 상태 업데이트
        this.updateFoldState = () => {
            this.setState({ foldState: !this.state.foldState })
            this.state.foldState === true ? this.setState({ foldMsg: "리스트 숨기기" }) :
                this.setState({ foldMsg: "리스트 펼치기" });
        }
    }

    // 할일 상태 변경
    updateStatus(todo, status) {
        if (status === "done") {
            todo.status = "done";
            this.tempDoneTodoList.push(todo);
        } else if (status = "remove") {
            todo.status = "removed";
            this.tempRemovedTodoList.push(todo);
        }
    }

    // 최초 렌더링 후 fetch 요청
    componentDidMount() {
        requestFetch(requestUrl).then(response => {
            response.forEach(v => this.tempTodoList.push(v))
            this.setState({ todoList: this.tempTodoList, todoNumber: this.tempTodoList.length })
        }).catch(err => new Error(`error ${err}`))
    }

    render() {
        const tempArr = this.state.todoList.map(todo =>
            <LiElement id={todo.id} key={todo.id} updateTodoStatus={this.updateTodo} >
                {todo.title}
            </LiElement>
            // v.id가 숫자라도 key는 문자열로 변환된다. id는 여전히 숫자
        );

        return (
            <styles.StyledDivTodoMain>
                <TodoScore className="todoscore"
                    todoNumber={this.state.todoNumber} doneTodoNumber={this.state.doneTodoNumber} removedTodoNumber={this.state.removedTodoNumber} />
                <AddTodo className="addTodo" passInputChange={this.updateInputChange} passNewTodo={this.updateNewTodo} />
                <TodoListView className="todoList" todoList={tempArr}
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