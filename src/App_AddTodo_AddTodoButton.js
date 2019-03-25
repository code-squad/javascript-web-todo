import React from 'react';
import { styles } from './styles'

// 등록 버튼 컴포넌트
const AddTodoButton = function (props) {
    function handleClick(event) {
        event.preventDefault();
        props.passNewTodo();
    }
    return (
        <styles.StyledButton onClick={handleClick}>
            {props.children}
        </styles.StyledButton>
    );
}

export { AddTodoButton };