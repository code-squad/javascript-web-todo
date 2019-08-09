import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

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

const Ul = styled.ul`

`

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

class ToDoList extends Component {
    state = {
        value: 0
    }

    render() {
        return (
            <Wrap>
                <ToggleButton>
                    <FontAwesomeIcon icon={faSortDown} color="#fff" />
                </ToggleButton>
                <H3> To Do List</H3>
                <Ul>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                    <Li>
                        study and play
                        <CancelButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#5a61ff" />
                        </CancelButton>
                    </Li>
                </Ul>
            </Wrap>
        )
    }
}

export default ToDoList;