import { useState } from "react";

const useInput = setInputVal => {
  const [, setValue] = useState("");
  const onChange = ({ target }) => {
    setValue(target.value);
    if (typeof setInputVal === "function") setInputVal(target.value);
  };

  return {
    onChange
  };
};

export default useInput;
