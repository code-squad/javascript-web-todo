const taskDataUrl = 'https://javascript-web-todo-server.herokuapp.com/';

const getData = async dataUrl => {
  try {
    const fetchedRes = await fetch(dataUrl);
    checkStatusNum(fetchedRes.status)
    const jsonData = await fetchedRes.json();
    return jsonData;
  } catch (err) {
    return {"tasks":[{ "title": `${err}`, "id": 1233, "status": "todo" }]}
  }
};

function checkStatusNum(statusNum) {
  if(400 <= statusNum && statusNum < 500) {
    throw new Error('잘못된 요청입니다.')
  } else if (500 <=statusNum) {
    throw new Error('서버가 불안정합니다.')
  }
}

export { getData, taskDataUrl };
