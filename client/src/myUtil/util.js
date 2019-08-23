export const getMatchedItemById = ({ itemCollection, id }) => {
  return itemCollection.filter(item => item.id === id)
}

export const getIdxOfMatchedItem = ({ itemCollection, id }) => {
  const [matchedItem] = getMatchedItemById({ itemCollection, id });
  return itemCollection.indexOf(matchedItem);
}