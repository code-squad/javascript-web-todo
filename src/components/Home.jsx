import React, { useState, useContext } from "react";
import { TodoContext } from "./ToDoStore";

const Home = () => {
  return (
    <>
      <h2>반갑습니다.</h2>
      <h2>할 일 관리 어플리케이션 입니다.</h2>

      <h2>현재 해야 할 일이 0개,</h2>
      <h2>완료된 일이 0개 있습니다.</h2>
    </>
  );
};

export default Home;
