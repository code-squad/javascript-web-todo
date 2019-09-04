import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import Counter from "./Counter";

const Manage = () => {
  return (
    <>
      <AddTodo />
      <Counter />
      <ShowTodo />
    </>
  );
};

export default Manage;
