import React from "react";
import { TodoContext } from "./TodoContext";

import Loader from "./Loader";
import TodoButton from "./TodoButton";

export default function RefetchContent() {
  const { fetchError, refetch } = useContext(TodoContext);
  return (
    <>
      <Loader message={fetchError.message} />
      <TodoButton
        clickHandler={refetch}
        name="Refetch"
        width="4rem"
        height="2rem"
        absolute={true}
        top="3rem"
      />
    </>
  );
}
