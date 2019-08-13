import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.p`
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')}
`

const ToDoListLiP = ({ checked, value }) => {
    console.log(checked);
    return (
        <Content checked={checked}>
            {value}
        </Content>
    )
}

export default ToDoListLiP;