async function _asyncGetJson(apiURI) {
  const init = {
    method: "GET",
    mode: "cors"
  };

  const data = await fetch(apiURI, init);
  const json = await data.json();

  return json;
}

export default _asyncGetJson;
