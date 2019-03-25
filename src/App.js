import React from 'react';
import { styles } from './styles'
import { TodoMain } from './App_TodoMain'

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

