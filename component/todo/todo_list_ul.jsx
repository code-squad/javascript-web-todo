import React, { useState, useEffect, useContext } from 'react';
import ToDoListLi from './todo_list_li';
import { AddListContext } from './context/addListContext';
import styled from 'styled-components';

const Wrap = styled.div`

`

const Ul = styled.ul`
    transition: all 0.2s ease-out;    
    opacity: ${props => (props.toggle ? '1' : '0')}
    display: ${props => (props.toggle ? 'block' : 'none')}
`

function random4Digit(){
    return shuffle( "0123456789".split('') ).join('').substring(0,4);
}
  
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const ToDoListUl = ({ toggle }) => {
    const { inputValue } = useContext(AddListContext);
    const [listData, setListData] = useState([]);

    const fetchAPI = async () => {
        try {
            const reqData = await fetch("http://ec2-13-124-158-185.ap-northeast-2.compute.amazonaws.com/todoAPI");
            const resData = await reqData.json();
            await setListData(resData.body);
            
        } catch (e) {
            console.log(e);
            return;
        }
    }

    const deleteItem = (target) => {
        setListData((prevData) => {
            const result = prevData.filter((v) => v.id !== target);
            return result
        })
    }

    useEffect(() => { // compoenetDidMount
        if(localStorage.myTodoList) {
            const savedData = JSON.parse(localStorage.myTodoList);
            setListData(savedData);

            return;
        }

        // setTimeout(() => {
        //     fetchAPI();
        // }, 1000)
        fetchAPI();

    }, [])

    useEffect(() => { // listData => localStorage
        if(listData.length === 0) return

        const jsonAPI = JSON.stringify(listData);
        localStorage.myTodoList = jsonAPI;

    }, [listData])

    useEffect(() => { // input 으로 추가 한 값 관련
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
            ? <div>loading...</div>
            : <Ul toggle={toggle}>
                {listData.map((v) => {
                    return (
                        <ToDoListLi 
                            handler={deleteItem} 
                            key={v.id} 
                            id={v.id} 
                            value={v.title} 
                        />
                    )
                })}
            </Ul>              
    }

    return (        
        <Wrap>
            {renderList()}
        </Wrap>
    )
}

export default ToDoListUl;