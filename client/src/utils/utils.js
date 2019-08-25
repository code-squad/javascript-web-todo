export const getNumOfTodos = todos => {
  return todos
    ? {
        todo: todos.filter(todo => todo.status === "todo").length,
        done: todos.filter(todo => todo.status === "done").length
      }
    : { todo: 0, done: 0 };
};
