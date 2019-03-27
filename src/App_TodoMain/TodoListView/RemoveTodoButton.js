import React from 'react';
import { styles } from '../styles/styles'


// 삭제 버튼 컴포넌트
function RemoveTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();              
        props.passTodoToBeRemoved(event);
    }
    return (
        <styles.StyledButtonUpdate id={props.id} name="remove" onClick={handleClick} >
            X
        </styles.StyledButtonUpdate>
    );
}

export { RemoveTodoButton }