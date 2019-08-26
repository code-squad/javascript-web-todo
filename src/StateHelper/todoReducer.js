const todosReducer = (todos, action) => {
  switch (action.type) {
    case "INIT_TODO":
      return action.todos;

    case "ADD_TODO":
      const newTodoObj = {
        title: action.title,
        id: action.id,
        status: "todo"
      };
      return [...todos, newTodoObj];

    case "DELETE_TODO":
      const remaindedTodos = todos.filter(todo => todo.id !== action.id);
      return remaindedTodos;

    case "CHANGE_TODO_STATUS":
      const index = todos.findIndex(todo => todo.id === action.id);
      const selected = todos[index];
      const nextTodos = [...todos];

      const statusToggle = status => {
        return status === "todo" ? "done" : "todo";
      };

      nextTodos[index] = {
        ...selected,
        status: statusToggle(selected.status)
      };

      return nextTodos;

    default:
      return todos;
  }
};

export default todosReducer;
