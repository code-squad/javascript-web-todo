import React, { useState, useContext } from "react";
import { TodoContext } from "./ToDoStore";
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
