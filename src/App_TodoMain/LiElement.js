import React from 'react';

// 하위 컴포넌트 임포트
import { RemoveTodoButton } from './TodoListView/RemoveTodoButton'
import { DoneTodoButton } from './TodoListView/DoneTodoButton'

// 할일 리스트 li 컴포넌트
function LiElement(props) {
    function updateTodoStatus(event) {
        props.updateTodoStatus(event);   
    }

    return (
        <li>
            {props.children}
            <DoneTodoButton id={props.id} passTodoToBeDone={updateTodoStatus} />
            <RemoveTodoButton id={props.id} passTodoToBeRemoved={updateTodoStatus} />
        </li>
    )
}

export { LiElement };