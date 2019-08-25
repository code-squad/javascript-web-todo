import { getIdxOfMatchedItem } from '../../../myUtil/util';

export const todoReducer = ({ todoItems, showingBtnTitle }, { type, payload }) => {
  const todoDuplicate = [...todoItems];
  let matchedIdx;
  
  switch (type) {
    case 'INIT_TODOITEMS':
      return { todoItems: [...payload], showingBtnTitle };

    case 'ADD_TODOITEMS':
      return { 
        todoItems: [{"title": payload, "id": Date.now(), "status": "todo"}, ...todoDuplicate],
        showingBtnTitle 
      };
        
    case 'UPDATE_TODOITEMS':
      matchedIdx = getIdxOfMatchedItem({ itemCollection: todoItems, id: payload });
      todoDuplicate[matchedIdx].status = 
        todoDuplicate[matchedIdx].status === 'todo'
        ? 'done'
        : 'todo'
      return { todoItems: todoDuplicate, showingBtnTitle };
    
    case 'DELETE_TODOITEMS':
      matchedIdx = getIdxOfMatchedItem({ itemCollection: todoItems, id: payload });
      todoDuplicate.splice(matchedIdx, 1);
      return { todoItems: todoDuplicate, showingBtnTitle };
    
    case 'CHANGE_BTNTITLE':
      return { 
        todoItems: todoDuplicate,
        showingBtnTitle: showingBtnTitle === 'Hide' ? 'Show' : 'Hide' 
      };

    default:
      break;
  }
}