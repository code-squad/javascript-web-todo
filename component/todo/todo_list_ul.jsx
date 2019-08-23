import React, { useState, useEffect, useCallback, useContext, memo } from 'react';
import ToDoListLi from './todo_list_li';
import { AddListContext } from './context/addListContext';
import styled from 'styled-components';


const Ul = styled.ul`
    display: ${props => (props.toggle ? 'block' : 'none')}
`

const NoList = styled.div`
    text-align: center;
    padding-bottom: 10px;
`

function random4Digit(){
    return shuffle( "0123456789".split('') ).join('').substring(0,4);
}
  
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const ToDoListUl = memo(({ toggle, loading, apiData }) => {
    const { inputValue, getListStatus } = useContext(AddListContext);
    const [listData, setListData] = useState([]);

    const deleteItem = useCallback((target) => {
        setListData((prevData) => {
            const result = prevData.filter((v) => v.id !== target);
            return result;
        })
    }, [])

    const changeItem = useCallback((target, state) => {
        if(state) {
            state = 'todo';
        } else {
            state = 'done';
        }

        setListData((prevData) => {
            const result = prevData.map((v) => {
                if(v.id === target) v.status = state;
                return v;
            });
            return result;
        })
    }, [])


    useEffect(() => { // initial value => fetchAPI or localStorage?   
        if(localStorage.getItem('myTodoList')) {
            const savedData = JSON.parse(localStorage.myTodoList);
            setListData(savedData);
            getListStatus(savedData);
            return
        }

        if(apiData.length !== 0) {
            setListData(apiData);
            getListStatus(listData);
        }

    }, [apiData])
    
    useEffect(() => { // listData => localStorage
        if(!loading) return;

        const jsonAPI = JSON.stringify(listData);
        localStorage.setItem('myTodoList', jsonAPI);

        getListStatus(listData);
    }, [listData])

    useEffect(() => { // new input value => listData
        if(inputValue) {
            let newData = {
                "title": inputValue,
                "id": random4Digit(),
                "status": "todo"
            }

            setListData((prevData) => {
                return [...prevData, newData]
            })
        }
    }, [inputValue])


    let renderList = <div>loading...</div>
    if(loading) {
        renderList = 
            <Ul toggle={toggle}>
                {listData.map((v) => {
                    return (
                        <ToDoListLi 
                            key={v.id} 
                            id={v.id} 
                            loading={loading}
                            value={v.title}
                            status={v.status} 
                            deleteHandler={deleteItem} 
                            changeHandler={changeItem}
                        />
                    )
                })}
            </Ul> 
    } 

    return (        
        <>
            {renderList}
        </>
    )
})

export default ToDoListUl;