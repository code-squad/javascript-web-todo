import React, {Component} from 'react';
import Input from './Input/Input';
import TodoList from './TodoList/TodoList';
import ShowContentsBtn from './ShowButton/ShowContentsBtn';
import styled from 'styled-components';
import todoApi from '../Apis/todoApi';

const Div = styled.div`
  margin: 50px auto;
  width: 50%;
`

class App extends Component {
  state = {
    todo: []
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
        <Input />
        <TodoList />
        <ShowContentsBtn />
      </Div>
    )
  }
}

export default App;