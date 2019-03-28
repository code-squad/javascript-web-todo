async function fetchData(url) {
    try{
      const data = await fetch(url);
      const jsonData = await data.json();
      return jsonData;
    } catch {
      throw new Error('http 요청 실패');
    }
}

export {fetchData};