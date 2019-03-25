import React from 'react';
import styled, { css } from 'styled-components'
import { styles } from './styles'

// TodoList View 컴포넌트
class TodoListView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickFolded = this.handleClickFolded.bind(this);
    }

    handleClickFolded() {
        this.props.passFoldState()
    }

    render() {
        return (
            <styles.StyledDivListView>
                <styles.StyledDiv>
                    <p>
                        해야 할 일들
                        </p>
                    <FoldButton handleClickFolded={this.handleClickFolded}>
                        {this.props.foldMsg}
                    </FoldButton>
                </styles.StyledDiv>

                {this.props.foldState ?
                    "" :
                    <styles.StyledDivTodoList>
                        <ul>
                            {this.props.todoList.length > 0 ?
                                this.props.todoList :
                                <li>현재 등록한 할일이 없습니다.</li>}
                        </ul>
                    </styles.StyledDivTodoList>
                }
            </styles.StyledDivListView>
        );
    }
}

// 삭제 버튼 컴포넌트
function DeleteTodoButton(props) {
    function handleClick(event) {
        event.preventDefault();
        props.passTodoToBeRemoved(event);

    }
    return (
        <styles.StyledButtonRemove id={props.id} onClick={handleClick}>
            X
        </styles.StyledButtonRemove>
    );
}

// 접기 버튼 컴포넌트
const FoldButton = function (props) {
    function handleClickFolded(event) {
        event.preventDefault();
        props.handleClickFolded();
    }
    return (
        <StyledFoldButton onClick={handleClickFolded}>
            {props.children}
        </StyledFoldButton>
    );
}

const StyledFoldButton = styled(styles.StyledButton)`
    margin-left : auto; 
`

export { TodoListView, DeleteTodoButton }