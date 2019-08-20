import { useState } from "react";

export const useInput = setInputVal => {
  const [, setValue] = useState("");
  const onChange = ({ target }) => {
    setValue(target.value);
    if (typeof setInputVal === "function") setInputVal(target.value);
  };

  return {
    onChange
  };
};
