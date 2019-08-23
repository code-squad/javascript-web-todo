import React, { memo } from 'react';
import styled from 'styled-components';

const Content = styled.p`
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')}
    color: ${props => (props.checked ? '#8e8eb8' : 'white')}
`

const ToDoListLiP = memo(({ checked, value }) => {
    return (
        <Content checked={checked}>
            {value}
        </Content>
    )
})

export default ToDoListLiP;