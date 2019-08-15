import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #fff;

    > div {
        flex: 1;
        min-height: 50px;
        border-radius: 10px;
        padding: 15px;
        margin: 0 10px;
        font-family: 'Beth Ellen', cursive;
        text-align: center;
        
        > h4 {
            font-size: 13px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
        }
    }
`

const ToDoBlock = styled.div`
    background: #9b62e7;
`

const DoingBlock = styled.div`
    background: #8c72ee;
`

const DoneBlock = styled.div`
    background: #5a61ff;
` 

const ToDoStatus = () => {
    return (
        <Wrap>
            <ToDoBlock>
                <h4>
                    To-do : <span>10</span>
                </h4>
            </ToDoBlock>
            <DoingBlock>
                <h4>
                    Doing : <span>20</span>
                </h4>
            </DoingBlock>
            <DoneBlock>
                <h4>
                    Done : <span>5</span>
                </h4>
            </DoneBlock>
        </Wrap>
    )
}

export default ToDoStatus;

