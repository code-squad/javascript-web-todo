import React, { useState, useEffect } from 'react';
import ToDoCheckBox from './todo_checkbox';
import ToDoListLiP from './todo_list_li_p';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
    padding: 15px;
    padding-left: 55px;
    background: #191933;
    border-radius: 7px;
    margin-bottom: 15px;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    overflow: hidden;
`

const Status = styled.span`
    display: inline-block;
    width: 10px;
    height: 100%;
    background: #9b62e7;
    position: absolute;
    left: 0;
    top: 0;
`

const CancelButton = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 15px;
`

const CheckboxLabel = styled.label`
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`

const ToDoListLi = (props) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(props.status === 'done') {
            setChecked(true)
        }
    }, [])

    const handleCheckboxState = (evt) => {
        setChecked(evt.target.checked);
        props.changeHandler(props.id, checked);
    }

    return (
        <Li>
            <Status></Status>
            <CheckboxLabel>
                <ToDoCheckBox checked={checked} onChange={handleCheckboxState} />
            </CheckboxLabel>
            <ToDoListLiP checked={checked} value={props.value}></ToDoListLiP>
            <CancelButton onClick={() => {props.deleteHandler(props.id)}}>
                <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
            </CancelButton>            
        </Li>
    )
}

export default ToDoListLi;