import React from 'react';
import styled from 'styled-components'
import { styles } from '../../styles/styles'
const { StyledButton } = styles; 

// 접기 버튼 컴포넌트
const FoldButton = function (props) {
    function handleClickFolded(event) {
        event.preventDefault();
        props.handleClickFolded();
    }

    const StyledFoldButton = styled(StyledButton)`
        margin-left : auto; 
    `

    return (
        <StyledFoldButton onClick={handleClickFolded}>
            {props.children}
        </StyledFoldButton>
    );
}

export { FoldButton }