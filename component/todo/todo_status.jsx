import React, { useState, useEffect, useCallback, memo } from 'react';
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

const ToDoStatus = memo(({ listState }) => {
    const [listData, setListData] = useState([]);
    const [todoCount, setTodoCount] = useState(0);
    const [allCount, setAllCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    
    useEffect(() => {
        setListData(listState);
        dataCount();
    }) 

    const dataCount = useCallback(() => {
        let allNumber = listData.length;
        let todoNumber = 0;
        let doneNumber = 0;
        
        listData.map((v) => {
            if(v.status === 'todo') {
                todoNumber++
            } else if(v.status === 'done') {
                doneNumber++
            }
        })

        setTodoCount(todoNumber);
        setDoneCount(doneNumber);
        setAllCount(allNumber);
    }, [listData])



    return (
        <Wrap>
            <DoingBlock>
                <h4>
                    All : <span>{allCount}</span>
                </h4>
            </DoingBlock>            
            <ToDoBlock>
                <h4>
                    To-do : <span>{todoCount}</span>
                </h4>
            </ToDoBlock>
            <DoneBlock>
                <h4>
                    Done : <span>{doneCount}</span>
                </h4>
            </DoneBlock>
        </Wrap>
    )
})

export default ToDoStatus;

