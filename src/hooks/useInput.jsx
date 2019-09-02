import { useState, useCallback } from "react";

const useInput = () => {
  const [state, setState] = useState({});

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  }, []);

  const restore = useCallback(name => {
    setState({ ...state, [name]: "" });
  }, []);

  return [state, handleChange, restore];
};

export default useInput;
