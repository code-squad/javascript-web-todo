import React, { useState, useEffect } from 'react';
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
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
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

const ToDoStatus = ({ listState }) => {
    const [listData, setListData] = useState([]);
    const [todoCount, setTodoCount] = useState(0);
    const [doingCount, setDoingCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    
    const dataCount = () => {

        let todoNumber = 0;
        let doingNumber = 0;
        let doneNumber = 0;

        listData.map((v) => {
            if(v.status === 'todo') {
                todoNumber++
            } else if(v.status === 'doing') {
                doingNumber++
            } else {
                doneNumber++
            }
        })

        setTodoCount(todoNumber);
        setDoingCount(doingNumber);
        setDoneCount(doneNumber);
    }

    useEffect(() => {
        setListData(listState);
        dataCount();
    }) 

    return (
        <Wrap>
            <ToDoBlock>
                <h4>
                    To-do : <span>{todoCount}</span>
                </h4>
            </ToDoBlock>
            <DoingBlock>
                <h4>
                    Doing : <span>{doingCount}</span>
                </h4>
            </DoingBlock>
            <DoneBlock>
                <h4>
                    Done : <span>{doneCount}</span>
                </h4>
            </DoneBlock>
        </Wrap>
    )
}

export default ToDoStatus;

