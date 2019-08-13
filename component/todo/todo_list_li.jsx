import React, { useState } from 'react';
import ToDoCheckBox from './todo_checkbox';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
    padding: 15px;
    padding-left: 50px;
    background: #191933;
    border-radius: 7px;
    margin-bottom: 15px;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`
const Content = styled.p`
    
`
// text-decoration: ${props => (checked ? 'line-through' : 'none')}

const CancelButton = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 15px;
`

const Label = styled.label`
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`

const ToDoListLi = (props) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxState = (evt) => {
        setChecked(evt.target.checked)
    }

    return (
        <Li>
            <Label>
                <ToDoCheckBox checked={checked} onChange={handleCheckboxState} />
            </Label>
            <Content>{props.value}</Content>
            <CancelButton>
                <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
            </CancelButton>            
        </Li>
    )
}

export default ToDoListLi;