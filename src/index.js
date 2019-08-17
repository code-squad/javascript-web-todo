import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import NewApp from './newApp/NewApp.jsx';
// 대문자와 jsx 확장자명 신경쓰기 
import { Normalize } from 'styled-normalize';



const Root = () => (
  <>
    <Normalize />
    <App />
  </>
)

ReactDOM.render(<Root />, document.querySelector('#root'))

