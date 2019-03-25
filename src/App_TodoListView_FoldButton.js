import React from 'react';
import styled, { css } from 'styled-components'
import { styles } from './styles'

// 접기 버튼 컴포넌트
const FoldButton = function (props) {
    function handleClickFolded(event) {
        event.preventDefault();
        props.handleClickFolded();
    }

    const StyledFoldButton = styled(styles.StyledButton)`
        margin-left : auto; 
    `

    return (
        <StyledFoldButton onClick={handleClickFolded}>
            {props.children}
        </StyledFoldButton>
    );
}

export { FoldButton }