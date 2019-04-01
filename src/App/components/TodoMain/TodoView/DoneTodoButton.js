import React from 'react';
import { styles } from '../../styles/styles'
const { StyledButtonUpdate } = styles;

// 완료 버튼 컴포넌트
function DoneTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();
        props.passTodoToBeDone(event);
    }

    return (
        <StyledButtonUpdate id={props.id} name="done" onClick={handleClick} >
            V
        </StyledButtonUpdate>
    );
}

export { DoneTodoButton }