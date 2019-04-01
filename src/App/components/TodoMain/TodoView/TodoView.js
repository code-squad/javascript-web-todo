import React from 'react';

// 하위 컴포넌트 임포트
import { FoldButton } from './FoldButton'
import { styles } from '../../styles/styles'
const { StyledDivListView, StyledDiv, StyledDivTodoList } = styles; 


// TodoList View 컴포넌트
class TodoView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickFolded = () =>
            this.props.passFoldState()
    }

    render() {
        return (
            <StyledDivListView>
                <StyledDiv>
                    <p>
                        해야 할 일들
                    </p>
                    <FoldButton handleClickFolded={this.handleClickFolded}>
                        {this.props.foldMsg}
                    </FoldButton>
                </StyledDiv>

                {this.props.foldState ?
                    "" :
                    <StyledDivTodoList>
                        <ul>
                            {this.props.todoList.length > 0 ?
                                <div>
                                    {this.props.todoList}
                                </div>
                                :
                                <li>현재 등록한 할일이 없습니다.</li>}
                        </ul>
                    </StyledDivTodoList>
                }
            </StyledDivListView>
        );
    }
}

export { TodoView }