import React from 'react';
import styled, { css } from 'styled-components'
import { styles } from './styles'

// AddTodo 컴포넌트
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.passInputChange = this.passInputChange.bind(this);
        this.passNewTodo = this.passNewTodo.bind(this);
    }

    passInputChange(event) {
        this.props.passInputChange(event);
    }

    passNewTodo() {
        this.props.passNewTodo();
    }

    render() {
        return (
            <StyledAddTodoDiv>
                <InputAddTodo passInputChange={this.passInputChange} />
                <AddTodoButton passNewTodo={this.passNewTodo} >
                    등록
                 </AddTodoButton>
            </StyledAddTodoDiv>
        );
    }
}

const StyledAddTodoDiv = styled(styles.StyledDiv)` 
    height: 50px;
`

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

export { AddTodo };