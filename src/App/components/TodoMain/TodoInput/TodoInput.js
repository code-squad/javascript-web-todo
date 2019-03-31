import React from 'react';
import styled from 'styled-components'
import { styles } from '../../styles/styles'

// 하위 컴포넌트 임포트
import { InputText } from './InputText'
import { AddButton } from './AddButton'

// AddTodo 컴포넌트
class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.passInputChange = event => 
            this.props.passInputChange(event);

        this.passNewTodo = () => 
            this.props.passNewTodo();
    }

    render() {
        return (
            <StyledAddTodoDiv>
                <InputText passInputChange={this.passInputChange} inputValue={this.props.inputValue} />
                <AddButton passNewTodo={this.passNewTodo} >
                    등록
                 </AddButton>
            </StyledAddTodoDiv>
        );
    }
}

const StyledAddTodoDiv = styled(styles.StyledDiv)` 
    height: 50px;
`
export { TodoInput };