import React, {Component} from 'react';
import InputBar from './Input/InputBar';
import TodoList from './TodoList/TodoList';
import ShowContentsBtn from './ShowButton/ShowContentsBtn';
import styled from 'styled-components';
import todoApi from '../Apis/todoApi';

const Div = styled.div`
  margin: 50px auto;
  width: 80%;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }

  async fetchMyTodoList()  {
    await todoApi.get('/develop/todolist')
      .then(res => {
        if(res.status === 200) {
          const myTodoList = res.data.body;
          this.setState({ todo: myTodoList });
        } else {
          return Promise.reject(res.status);
        }
      })
      .catch(reason => console.log(reason.message));
  }

  componentDidMount() {
    this.fetchMyTodoList();
  }

  render() {
    return(
      <Div>
        <InputBar onTermSubmit={ this.onTermSubmit } />
        <TodoList myTodo={ this.state.todo } />
        <ShowContentsBtn />
      </Div>
    )
  }
}

export default App;