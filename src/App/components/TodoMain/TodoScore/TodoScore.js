import React from 'react';
import styled from 'styled-components'
import { styles } from '../../styles/styles'
const { StyledDiv } = styles;

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
    const ScoreIndicatorDiv = styled(StyledDiv)`
        justify-content: flex-end;
        background: white; 
    `

    return (
        <ScoreIndicatorDiv>
            todo <CircleDiv type="todo">{props.todoScore}</CircleDiv>
            done <CircleDiv type="done">{props.doneScore}</CircleDiv>
            removed <CircleDiv type="removed">{props.removedScore}</CircleDiv>
        </ScoreIndicatorDiv>
    );
}

export { TodoScore }