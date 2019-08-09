import React, {Component} from 'react';
import Input from './Input/Input';
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
    const myTodoList = await todoApi.get('/develop/todolist').then(res => res.data.body)
    this.setState({ todo: myTodoList });
    console.log(this.state);
  }

  componentDidMount() {
    this.fetchMyTodoList();
  }

  render() {
    return(
      <Div>
        <Input />
        <TodoList myTodo={this.state.todo} />
        <ShowContentsBtn />
      </Div>
    )
  }
}

export default App;