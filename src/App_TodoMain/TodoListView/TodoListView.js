import React from 'react';
import { styles } from '../styles/styles'

// 하위 컴포넌트 임포트
import { FoldButton } from './FoldButton'

// TodoList View 컴포넌트
class TodoListView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickFolded = () =>
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
                                <div>
                                    {this.props.todoList}
                                </div>
                                :
                                <li>현재 등록한 할일이 없습니다.</li>}
                        </ul>
                    </styles.StyledDivTodoList>
                }
            </styles.StyledDivListView>
        );
    }
}

export { TodoListView }