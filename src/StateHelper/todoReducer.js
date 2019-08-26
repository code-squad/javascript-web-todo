const todosReducer = (state, action) => {
  switch (action.type) {
    case "INIT_TODO":
      return {
        todos: action.todos
      };
    case "ADD_TODO":
      const newTodoObj = {
        title: action.title,
        id: action.id,
        status: "todo"
      };
      return {
        todos: [...state.todos, newTodoObj]
      };
    case "DELETE_TODO":
      const remaindedTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        todos: remaindedTodos
      };

    case "CHANGE_TODO_STATUS":
      const index = state.todos.findIndex(todo => todo.id === action.id);
      const selected = state.todos[index];
      const nextTodos = [...state.todos];

      const statusToggle = status => {
        return status === "todo" ? "done" : "todo";
      };

      nextTodos[index] = {
        ...selected,
        status: statusToggle(selected.status)
      };

      return {
        todos: nextTodos
      };

    default:
      return state;
  }
};

export default todosReducer;
