import React from 'react';
import { styles } from '../styles/styles'

// 완료 버튼 컴포넌트
function DoneTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();
        props.passTodoToBeDone(event);
    }

    return (
        <styles.StyledButtonUpdate id={props.id} name="done" onClick={handleClick} >
            V
        </styles.StyledButtonUpdate>
    );
}

export { DoneTodoButton }