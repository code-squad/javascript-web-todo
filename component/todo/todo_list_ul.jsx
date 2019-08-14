import React, { useState, useEffect } from 'react';
import ToDoListLi from './todo_list_li';
import styled from 'styled-components';

const Wrap = styled.div`
    display: ${props => (props.display ? 'block' : 'none')}
`

const Ul = styled.ul`
    transition: all 0.2s ease-out;    
    opacity: ${props => (props.toggle ? '1' : '0')}
    display: ${props => (props.toggle ? 'block' : 'none')}
`

const ToDoListUl = ({ toggle }) => {
    const [apiInfo, setApiInfo] = useState([]);

    const fetchAPI = async () => {
        try {
            const reqData = await fetch("http://ec2-13-125-97-75.ap-northeast-2.compute.amazonaws.com/todoAPI");
            const resData = await reqData.json();
            setApiInfo(resData.body);

        } catch (e) {
            console.log(e);
            return;
        }
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    return (        
        <Ul toggle={toggle}>
            <ToDoListLi key={'0000'} value={'Study react.'} />
            {apiInfo.map((v) => {
                console.log(v);
                return (
                    <ToDoListLi key={v.id} value={v.title} />
                )
            })}
        </Ul>        
    )
}

export default ToDoListUl;