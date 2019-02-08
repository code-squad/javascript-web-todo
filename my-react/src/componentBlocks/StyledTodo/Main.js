import styled from 'styled-components';
import theme from '../themePalette';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: 10% 15% 15% auto 10%;

  background-color: ${theme.color.background};
  box-shadow: 24px 24px ${theme.color.boxShadow};
  position: absolute;
  left: 20%;
  top: 10%;
  width: 60vw;
  height: 80vh;
  min-height: 64rem;
  max-height: 80rem;
`;

export default StyledMain;
