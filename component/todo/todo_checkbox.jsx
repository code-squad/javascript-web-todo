import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
    width: 14px;
    height: 14px;
    padding: 2px;
`

const CheckBoxWrap = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    width: 0;
    height: 0;
    position: absolute;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? '#11111d' : '#5a61ff')}
    border-radius: 3px;
    transition: all 150ms;

    ${Icon} {
        text-align: center;
        vertical-align: middle;
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`

const ToDoCheckBox = ({ checked, ...props }) => {
    return (
        <CheckBoxWrap>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon>
                    <FontAwesomeIcon icon={faCheck} color="#5a61ff" />
                </Icon> 
            </StyledCheckbox>
        </CheckBoxWrap>
    )
}

export default ToDoCheckBox;