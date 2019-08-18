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
    const [apiInfo, setApiInfo] = useState([]);
    //const [addValue, setAddValue] = useState(inputValue);

    

    const fetchAPI = async () => {
        try {
            const reqData = await fetch("http://ec2-15-164-215-124.ap-northeast-2.compute.amazonaws.com/todoAPI");
            const resData = await reqData.json();
            setApiInfo(resData.body);
            
        } catch (e) {
            console.log(e);
            return;
        }
    }

    const deleteItem = (target) => {
        setApiInfo((prevInfo) => {
            const result = prevInfo.filter((v) => v.id !== target);
            return result
        })
    }

    const renderList = () => {
        return apiInfo.length === 0
            ? <div>loading...</div>
            : <Ul toggle={toggle}>
                <ToDoListLi key={'0000'} value={'Study react.'} />
                {apiInfo.map((v) => {
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

    useEffect(() => {
        setTimeout(() => {
            fetchAPI();
        }, 1000)
    }, [])

    useEffect(() => {
        if(inputValue) {
            let data = {
                "title": inputValue,
                "id": random4Digit(),
                "status": "todo"
            }

            setApiInfo((prevInfo) => {
                const result = [...prevInfo, data]
                return result
            })
        }

    }, [inputValue])

    return (        
        <Wrap>
            {renderList()}
        </Wrap>
    )
}

export default ToDoListUl;