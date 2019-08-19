import { useState, useEffect } from "react";
import CONFIGS from "../configs/configs";
import { makeDelay } from "../utils/myUtils";

const { LOADING_DELAY } = CONFIGS;

const useFetch = (url, callback, errorHandler = () => {}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        await makeDelay(LOADING_DELAY);
        const res = await fetch(url);
        if (!res.ok) throw Error(`STATUS CODE : ${res.status}`);
        if (res instanceof Promise) throw Error("REQUEST FAILED");
        const data = await res.json();
        callback(data.body);
      } catch (err) {
        console.warn(err);
        errorHandler();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading;
};

export default useFetch;
