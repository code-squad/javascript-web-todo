import React from 'react';
import { TodoMain } from './components/TodoMain/TodoMain'

// TodoApp root 컴포넌트 


class App extends React.Component {
  render() {
    return (
      <div>
        <TodoMain />
      </div>
    )
  }
}

export { App };

