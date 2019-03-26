import React from 'react';
import styled, { css } from 'styled-components'
import { styles } from './styles'

function TodoScore(props) {

    const CircleDiv = styled.div`
        width:40px;
        height:40px;
        margin: 0 15px 0 3px;
        border-radius:50%;
        background: ${
            props => props.type === "todo" ? "gray" :
                props.type === "done" ? "orange" :
                props.type === "removed" ? "lightsteelblue" : null
        };
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        font-weight: bold;
        color: white;
    `
    const ScoreIndicatorDiv = styled(styles.StyledDiv)`
        justify-content: flex-end;
        background: white; 
    `

    return (
        <ScoreIndicatorDiv>
            todo <CircleDiv type="todo">{props.todoNumber}</CircleDiv>
            done <CircleDiv type="done">{props.doneTodoNumber}</CircleDiv>
            removed <CircleDiv type="removed">{props.removedTodoNumber}</CircleDiv>
        </ScoreIndicatorDiv>
    );
}

export { TodoScore }