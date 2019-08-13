import React from 'react';
import styled from "styled-components";

const Form = styled.form`
  background: #a6d0d1;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;


export default function InputBar() {
  // 당연히 함수니까 어디던 콘솔이 위치해도 상관없음.
  console.log("inputBar is render...");

  return (
    <Form>
    <label>할일 입력 : </label>
    <input />
    <button>등록</button>
    </Form>
  );
}


