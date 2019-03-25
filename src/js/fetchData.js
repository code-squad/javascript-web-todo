const taskDataUrl = 'https://javascript-web-todo-server.herokuapp.com/'

const getData = async (dataUrl) => {
  try {
    const fetchedRes = await fetch(dataUrl);
    const jsonData = await fetchedRes.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

export { getData, taskDataUrl }