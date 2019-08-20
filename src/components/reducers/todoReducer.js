import { getIdxOfMatchedItem } from '../../myUtil/util';

export const todoReducer = (todoItems, { type, payload }) => {
  let matchedIdx;
  const todoDuplicate = [...todoItems];
  switch (type) {
    case 'ADD':
      return [...todoItems, {"title": payload, "id": Date.now(), "status": "todo"}];
      
    case 'INIT':
      return payload;
        
    case 'UPDATE':
      matchedIdx = getIdxOfMatchedItem({ itemCollection: todoItems, id: payload });
      todoDuplicate[matchedIdx].status = 
        todoDuplicate[matchedIdx].status === 'todo'
        ? 'done'
        : 'todo'
      return todoDuplicate;
    
    case 'DELETE':
        matchedIdx = getIdxOfMatchedItem({ itemCollection: todoItems, id: payload });
        todoDuplicate.splice(matchedIdx, 1);
        return todoDuplicate;

    default:
      break;
  }
}