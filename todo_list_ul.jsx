import React, { Component } from 'react';
import ToDoListLi from './todo_list_li';
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
    transform: translate(-50%, -50%);
    cursor: pointer;
`
const CancelButton = styled.span`
    position: absolute;
    right: 15px;
    cursor: pointer;
    font-size: 15px;
`
const H3 = styled.h3`
    margin-bottom: 20px;
    font-family: 'Beth Ellen', cursive;
    font-size: 12px;
    text-indent: 5px;
`

class ToDoListUl extends Component {
    state = {
        value: 0
    }

    render() {
        return (
            <Wrap>
                <ToggleButton>
                    <FontAwesomeIcon icon={faSortDown} color="#fff" />
                </ToggleButton>
                <H3>&#60; List /&#62;</H3>
                <ul>
                    <ToDoListLi />
                </ul>
            </Wrap>
        )
    }
}

export default ToDoListUl;