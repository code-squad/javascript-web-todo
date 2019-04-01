import React from 'react';
import { styles } from '../../styles/styles'
const { StyledButtonUpdate } = styles;

// 삭제 버튼 컴포넌트
function RemoveTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();              
        props.passTodoToBeRemoved(event);
    }
    return (
        <StyledButtonUpdate id={props.id} name="remove" onClick={handleClick} >
            X
        </StyledButtonUpdate>
    );
}

export { RemoveTodoButton }