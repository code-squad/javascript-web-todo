import React from 'react';

// 하위 컴포넌트 임포트
import { DeleteTodoButton } from './App_TodoListView_DeleteTodoButton'

// 할일 리스트 li 컴포넌트
function LiElement(props) {
    function passTodoToBeRemoved(event) {
        props.passTodoToBeRemoved(event);
    }
    
    return (
        <li>
            {props.children}
            <DeleteTodoButton id={props.id} passTodoToBeRemoved={passTodoToBeRemoved} />
        </li>
    )
}

export { LiElement };