import { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = _ => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    setState({
      ...state,
      loading: true
    });
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setState({
          ...state,
          loading: false,
          data: data.body
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useFetch;
