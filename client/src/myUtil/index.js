export const getMatchedItemById = ({ itemCollection, id }) => {
  return itemCollection.filter(item => item.id === id)
}

export const getIdxOfMatchedItem = ({ itemCollection, id }) => {
  const [matchedItem] = getMatchedItemById({ itemCollection, id });
  return itemCollection.indexOf(matchedItem);
}

export const countTodoItems = (todoItems) => {
  const numOfTodo = todoItems.filter(item => item.status === 'todo').length;
  const numOfDone = todoItems.filter(item => item.status === 'done').length;
  return { numOfTodo, numOfDone }
}