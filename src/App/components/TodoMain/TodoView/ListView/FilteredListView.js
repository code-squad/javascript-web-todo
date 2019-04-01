import React from 'react';
import { TodoListView } from './TodoListView'
import { CompleteListView } from './CompleteListView'
import { RemovedListView } from './RemovedListView'

function FilteredListView(props) {
    const id =  props.match.params.id;
    return (
        id === "todo" ? 
        <TodoListView todoList={props.todoList} updateTodoStatus={props.updateTodoStatus}
            filterByStatus={props.filterByStatus} todoStatus="todo" /> :
        id === "complete" ? 
        <CompleteListView todoList={props.todoList} updateTodoStatus={props.updateTodoStatus}
                filterByStatus={props.filterByStatus} todoStatus="done" /> :
        id === "removed" ?
        <RemovedListView todoList={props.todoList} updateTodoStatus={props.updateTodoStatus}
                filterByStatus={props.filterByStatus} todoStatus="remove" /> : null
    )    
}

export { FilteredListView }
