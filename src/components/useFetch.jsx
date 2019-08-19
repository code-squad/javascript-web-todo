import React, { useState, useEffect, useRef } from "react";

const useFetch = () => {
  const [fetchObj, setFetchObj] = useState({
    result: [],
    loading: false
  });

  const fetchInitialData = async (cbFunc, url, errorHandler) => {
    let newFetchObj = {
      result: [],
      loading: false
    };

    try {
      newFetchObj.loading = true;
      setFetchObj(newFetchObj);

      const response = await fetch(url);

      if (!response.ok) throw new Error(response.status); // resolved지만 404, 500..인 경우
      if (response === undefined) throw new Error("Promise(rejected)"); // Promise(rejected)인 경우

      const jsonData = await response.json();

      newFetchObj.result = jsonData.body;
      newFetchObj.loading = false;

      setFetchObj(newFetchObj);
      cbFunc(newFetchObj.result);
    } catch (errorMsg) {
      errorHandler(errorMsg);
    }
  };

  return [fetchObj, fetchInitialData];
};

export default useFetch;
