import React from 'react';
import { styles } from './styles'


// 삭제 버튼 컴포넌트
function DeleteTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();
        props.passTodoToBeRemoved(event);

    }
    return (
        <styles.StyledButtonRemove id={props.id} onClick={handleClick}>
            X
        </styles.StyledButtonRemove>
    );
}

export { DeleteTodoButton }