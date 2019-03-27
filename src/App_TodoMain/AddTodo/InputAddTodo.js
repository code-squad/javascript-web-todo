import React from 'react';
import { styles } from '../styles/styles'

// InputAddTodo 컴포넌트
function InputAddTodo(props) {
    function handleInputChange(event) {
        props.passInputChange(event);
    }

    return (
        <styles.StyledDivInputSection>
            <label> 할일 입력:
        <styles.StyledInput placeholder="입력해 주세요." onChange={handleInputChange} />
            </label>
        </styles.StyledDivInputSection>
    )
}

export { InputAddTodo }