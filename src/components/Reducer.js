const reducer = (todos, { type, payload }) => {
  switch (type) {
    case "INIT":
      return payload;
    case "ADD":
      const id = 0 | (Math.random() * 9000 + 1000);
      return [...todos, { title: payload, id, status: "todo" }];
    case "UPDATE":
      return todos.map(el => {
        const status = el.status === "todo" ? "done" : "todo";
        return el.id === payload ? { ...el, status } : el;
      });
    case "DELETE":
      return todos.filter(el => el.id !== payload);
    default:
      return todos;
  }
};

export default reducer;