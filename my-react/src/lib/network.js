export async function asyncGetJson(apiURI) {
  const init = {
    method: 'GET',
    mode: 'cors',
  };

  const data = await fetch(apiURI, init);
  const json = await data.json();

  return json;
}

export default { asyncGetJson };
