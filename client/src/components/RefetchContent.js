import React from "react";
import { TodoContext } from "./TodoContext";

import Loader from "./Loader";
import TodoButton from "./TodoButton";
import styleOptions from "./styleOptions";

export default _ => {
  const { fetchError, refetch } = useContext(TodoContext);
  return (
    <>
      <Loader message={fetchError.message} />
      <TodoButton
        clickHandler={refetch}
        name="Refetch"
        {...styleOptions.REFETCH_BUTTON}
      />
    </>
  );
};
