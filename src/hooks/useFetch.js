import { useState, useEffect } from 'react';

export default ({ fn, errorFn, url }) => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const rawData = await fetch(url);
      const jsonData = await rawData.json();
      const [message, isSuccess] = errorReader(jsonData.statusCode);

      if (isSuccess) {
        fn(jsonData.body);
      } else {
        throw new Error(message);
      }
    } catch (e) {
      console.log(e);
      errorFn(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading;
};

const errorReader = statusCode => {
  if (/^2/.test(statusCode)) {
    return ['success', true];
  }

  if (/^4/.test(statusCode)) {
    return [`clientError statusCode: ${statusCode}`, false];
  }

  if (/^5/.test(statusCode)) {
    return [`serverError statusCode: ${statusCode}`, false];
  }

  return [`알 수 없는 에러입니다. statusCode: ${statusCode}`, false];
};
