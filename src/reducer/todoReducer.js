import { makeId } from 'simple-util-js'; // 직접만든 util입니다.

export default (todos, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload;
    case 'ADD':
      return [
        ...todos,
        {
          id: makeId(),
          title: payload,
          status: 'todo'
        }
      ];
    case 'DELETE':
      return todos.filter(todo => todo.id !== payload);
    case 'TOGGLE_STATUS':
      return todos.map(todo => {
        if (todo.id === payload) {
          todo.status = todo.status === 'todo' ? 'done' : 'todo';
        }
        return todo;
      });
    default:
      break;
  }
};
