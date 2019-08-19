import React, { useState, useEffect, useRef } from "react";

const useFetch = (cbFunc, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async (cbFunc, url, errorHandler) => {
    try {
      setLoading(true);

      const response = await fetch(url);

      if (!response.ok) throw new Error(response.status); // resolved지만 404, 500..인 경우
      if (response === undefined) throw new Error("Promise(rejected)"); // Promise(rejected)인 경우

      const jsonData = await response.json();

      setLoading(false);
      cbFunc(jsonData.body);
    } catch (errorMsg) {
      errorHandler(errorMsg);
    }
  };

  useEffect(() => {
    fetchInitialData(cbFunc, url);
  }, []);

  return loading;
};

export default useFetch;
