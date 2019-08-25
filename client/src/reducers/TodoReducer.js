export default (todos, { type, payload }) => {
  switch (type) {
    case "READ":
      return payload ? [...payload] : null;
    case "CREATE":
      return [...todos, payload];
    case "UPDATE":
      console.log(payload);
      return [...payload];
    case "DELETE":
      return [...todos.filter(todo => todo.id !== payload)];
    default:
      console.error(`action type error: ${action.type}`);
  }
};
