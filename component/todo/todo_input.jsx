import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
    padding: 20px 0;
`

const H3 = styled.h3`
    margin-bottom: 20px;
    font-family: 'Beth Ellen', cursive;
    font-size: 12px;
    text-indent: 5px;
`

const InnerWrap = styled.div`
    display: flex;
`

const Input = styled.input`
    background: #191933;
    border: none;
    box-shadow: none;
    width: 100%;
    height: 40px;
    display: inline-block;
    border-radius: 15px;
    color: #fff;
    padding: 0 10px;
    margin-right: 15px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`

const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    border: none;
    box-shadow: none;
    background: #5a61ff;
    cursor: pointer;
`

const ToDoInput = (props) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Wrap>
            <H3>&#60; Input /&#62;</H3>
            <InnerWrap>
                <Input 
                    type="text"
                    onChange={handleChange} 
                    placeholder="what to do...?" 
                />
                <Button onClick={() => {props.handler(inputValue)}}>
                    <FontAwesomeIcon icon={faPlus} color="#fff" />
                </Button>
            </InnerWrap>
        </Wrap>
    )
}

export default ToDoInput;