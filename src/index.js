import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';



const Root = () => (
  <>
    <Normalize />
    <App />
  </>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
// ReactDOM.render(
//   <StyledComponent />,
//   document.getElementById('root')
// );
