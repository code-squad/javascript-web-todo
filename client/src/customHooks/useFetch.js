import { useState , useEffect } from "react";

const useFetch = (callbackFc) => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInitialData(API_URL);
  }, []);

  const fetchInitialData = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.statusCode === "404")
        throw Error("status404 : 잘못된 url로 요청을 보냈습니다.");
      callbackFc([...data.body]);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  return isLoading;
}

export default useFetch;
