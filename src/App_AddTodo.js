import React from 'react';
import styled, { css } from 'styled-components'
import { styles } from './styles'

// 하위 컴포넌트 임포트
import { InputAddTodo } from './App_AddTodo_InputAddTodo'
import { AddTodoButton } from './App_AddTodo_AddTodoButton'

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
export { AddTodo };