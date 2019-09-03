import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../provider/ToDoStore";

const Home = () => {
  const { todoData, error, loading, todoCnt, doneCnt } = useContext(
    TodoContext
  );

  const showStatus = () => {
    if (loading) return <h2>로딩중...</h2>;
    if (error) return <h2>네트워크 요청 실패</h2>;

    return (
      <>
        <h2>현재 해야 할 일이 {todoCnt}개,</h2>
        <h2>완료된 일이 {doneCnt}개 있습니다.</h2>
      </>
    );
  };

  return (
    <>
      <h2>반갑습니다.</h2>
      <h2>할 일 관리 어플리케이션 입니다.</h2>
      {showStatus()}
    </>
  );
};

export default Home;
