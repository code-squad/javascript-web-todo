import React from "react";
import { useTodoContext } from "./TodoContextProvider";

const Welcome = () => {
  const { todoCount, doneCount } = useTodoContext();
  return (
    <>
      <div>반갑습니다.</div>
      <div>할일관리 애플리케이션입니다.</div>
      <div>현재 해야 할 일이 {todoCount}개,</div>
      <div>완료된 일이 {doneCount}개 있습니다.</div>
    </>
  );
};

export default Welcome;
