import React from 'react';
import styled from 'styled-components';
import theme from '../../../style/themePalette';

const FoldBtn = styled(({ className, folded, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {folded ? 'Unfold' : 'Fold'}
  </button>
))`
  background: ${props => (props.folded ? theme.color.highlight : 'unset')};
  border: 1px solid ${props => (props.folded ? 'white' : theme.color.highlight)};
  font-size: 2rem;
  text-align: center;
  color: ${props => (props.folded ? 'white' : theme.color.highlight)};
  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: black;
  }
`;

export default FoldBtn;
