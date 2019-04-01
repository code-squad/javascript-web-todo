async function fetchData(url) {
    try{
      const data = await fetch(url);
      if(data.status === 200) return await data.json();
      throw new Error(errMessage(data.status));
    } catch(err) {
      console.error(err);
    }
}
function errMessage(status){
  let msg;
  switch(status){
    case 204:
      msg = 'No Content';
      break;
    case 400:
      msg = 'Bad Request';
      break;
    case 401:
      msg = 'Unauthorized'
      break;
    case 404:
      msg = 'Not Found';
      break;
    case 500:
      msg = 'Internal Server Error';
      break;
    case 502:
      msg = 'Bad Gateway';
      break;
    case 503:
      msg = 'Service Unavailable';
      break;
    default:
      msg = '잘못된 접근입니다.';
      break;
  }
  return msg;
}

export {fetchData};