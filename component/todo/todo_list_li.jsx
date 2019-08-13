import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
    padding: 15px;
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
const CancelButton = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 15px;
`

class ToDoListLi extends Component {
    state = {
        value: 'React study!!!',
    }

    render() {
        return (
            <Li>
                <p>{this.props.value}</p>
                <CancelButton>
                    <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                </CancelButton>            
            </Li>
        )
    }
}

export default ToDoListLi;