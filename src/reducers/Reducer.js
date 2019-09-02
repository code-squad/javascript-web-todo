const reducer = (todos, { type, payload }) => {
  switch (type) {
    case 'INIT_TODO':
      return payload;
    case 'ADD_TODO':
      const id = 0 | (Math.random() * 9000 + 1000);
      return [...todos, { title: payload, id, status: 'todo' }];
    case 'UPDATE_TODO':
      return todos.map(el => {
        const status = el.status === 'todo' ? 'done' : 'todo';
        return el.id === payload ? { ...el, status } : el;
      });
    case 'DELETE_TODO':
      return todos.filter(el => el.id !== payload);
    default:
      return todos;
  }
};

export default reducer;
