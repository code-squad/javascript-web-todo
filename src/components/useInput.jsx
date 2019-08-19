import { useState } from "react";

const useInput = () => {
  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  return [state, handleChange];
};

export default useInput;
