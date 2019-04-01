import React from 'react';
import { styles } from '../../styles/styles'
const { StyledButton } = styles;

// 등록 버튼 컴포넌트
const AddButton = function (props) {
    function handleClick(event) {
        event.preventDefault();
        props.passNewTodo();
    }
    return (
        <StyledButton onClick={handleClick}>
            {props.children}
        </StyledButton>
    );
}

export { AddButton };