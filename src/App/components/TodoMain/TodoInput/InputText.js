import React from 'react';
import { styles } from '../../styles/styles'
const { StyledDivInputSection, StyledInput } = styles;

// InputAddTodo 컴포넌트
function InputText(props) {
    function handleInputChange(event) {
        const inputValue = event.target.value;
        props.passInputChange(inputValue);
    }
    function handleKeyUp(event) {     
        const KeyCode = event.keyCode;   
        props.passKeyUp(KeyCode);
    }
    return (
        <StyledDivInputSection>
            <label> 할일 입력:
        <StyledInput placeholder="입력해 주세요." onChange={handleInputChange} onKeyDown={handleKeyUp}
                    value={props.inputValue} />
            </label>
        </StyledDivInputSection>
    )
}

export { InputText }