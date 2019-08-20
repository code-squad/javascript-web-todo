import React, { useState, useEffect, useCallback, useContext, memo } from 'react';
import ToDoListLi from './todo_list_li';
import { AddListContext } from './context/addListContext';
import useFetch from '../custom_hook/useFetch';
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

const ToDoListUl = memo(({ toggle }) => {
    const { inputValue, getListStatus } = useContext(AddListContext);
    const [apiData, setApiData] = useState([]);    
    const [listData, setListData] = useState([]);
    const apiURL = `http://ec2-13-124-158-185.ap-northeast-2.compute.amazonaws.com/todoAPI`

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

    useFetch(setApiData, apiURL);

    useEffect(() => { // initial value = fetchAPI or localStorage?
        if(localStorage.myTodoList) {
            const savedData = JSON.parse(localStorage.myTodoList);
            setListData(savedData);
            getListStatus(savedData);
            return;
        }

        setListData(apiData);
        getListStatus(listData);
    }, [apiData])

    useEffect(() => { // listData => localStorage
        const jsonAPI = JSON.stringify(listData);
        localStorage.myTodoList = jsonAPI;

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

    const renderList = () => {
        return listData.length === 0
            ? <NoList>None</NoList>
            : <Ul toggle={toggle}>
                {listData.map((v) => {
                    return (
                        <ToDoListLi 
                            deleteHandler={deleteItem} 
                            changeHandler={changeItem}
                            key={v.id} 
                            id={v.id} 
                            value={v.title}
                            status={v.status} 
                        />
                    )
                })}
            </Ul>              
    }

    return (        
        <>
            {renderList()}
        </>
    )
})

export default ToDoListUl;