import defaultTodos from "../../../public/defaultTodos";

export default {
  Query: {
    _: () => true,
    getDefaultTasks: () => Object.values(defaultTodos)
  },

  Mutation: {
    _: () => true
  },

  Subscription: {
    _: () => true
  }
};
