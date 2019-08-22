import { useState } from "react";

const useInput = () => {
  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const restore = name => {
    setState({ ...state, [name]: "" });
  };

  return [state, handleChange, restore];
};

export default useInput;
