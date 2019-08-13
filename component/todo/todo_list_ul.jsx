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
const H3 = styled.h3`
    margin-bottom: 20px;
    font-family: 'Beth Ellen', cursive;
    font-size: 12px;
    text-indent: 5px;
`

class ToDoListUl extends Component {
    state = {
        apiInfo: []
    }

    async componentDidMount() {
        try {
            const reqData = await fetch("https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist");
            const resData = await reqData.json();
            this.setState({ apiInfo: resData.body });

        } catch (e) {
            console.log(e);
            return;
        }
    }

    render() {
        return (
            <Wrap>
                <ToggleButton>
                    <FontAwesomeIcon icon={faSortDown} color="#fff" />
                </ToggleButton>
                <H3>&#60; List /&#62;</H3>
                <ul>
                    {this.state.apiInfo.map((v) => {
                        return (
                            <ToDoListLi key={v.id} value={v.title} />
                        )
                    })}
                </ul>
            </Wrap>
        )
    }
}

export default ToDoListUl;