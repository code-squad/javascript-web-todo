import React, { useState, useCallback, memo } from 'react';
import ToDoListUl from './todo_list_ul';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
    border-top: 1px solid #2c2c47;
    margin-top: 10px;
    padding-top 30px;
    position: relative;
`
const ToggleButton = styled.span`
    width: 23px;
    height: 23px;
    text-align: center;
    display: inline-block;
    background: #5a61ff;
    border-radius: 50%;
    position: absolute; 
    left: 50%;
    top: 0;
    cursor: pointer;
    transition: all 0.2s ease-out;    
    transform: translate(-50%, -50%) ${props => (props.toggle ? 'rotate(0deg)' : 'rotate(180deg)')}
`
const H3 = styled.h3`
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-indent: 5px;
`

const ToDoList = memo(() => {
    const [toggle, setToggle] = useState(true)

    const listToggling = useCallback(() => {
        if(toggle) {
            setToggle(false)
            return;
        }
        setToggle(true);
    }, [toggle])

    return (
        <Wrap>
            <ToggleButton toggle={toggle} onClick={listToggling}>
                <FontAwesomeIcon icon={faSortDown} color="#fff" />
            </ToggleButton>
            <H3>&#60; List /&#62;</H3>
            <ToDoListUl toggle={toggle}></ToDoListUl>
        </Wrap>
    )
})

export default ToDoList;