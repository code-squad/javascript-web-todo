async function _asyncGetTodoJson(apiURI) {
  const init = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    mode: "cors"
  };

  const data = await fetch(apiURI, init);
  const json = await data.json();

  return json;
}

export default _asyncGetTodoJson;
