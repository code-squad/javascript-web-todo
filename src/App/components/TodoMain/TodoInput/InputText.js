import React from 'react';
import { styles } from '../../styles/styles'
const { StyledDivInputSection, StyledInput } = styles;

// InputAddTodo 컴포넌트
function InputText(props) {
    function handleInputChange(event) {
        props.passInputChange(event);
    }
    return (
        <StyledDivInputSection>
            <label> 할일 입력:
        <StyledInput placeholder="입력해 주세요." onChange={handleInputChange} value={props.inputValue} />
            </label>
        </StyledDivInputSection>
    )
}

export { InputText }