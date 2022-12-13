


async function makeRequest(url) {
  if (!url) {
    console.error("ERROR");
    return;
  }
  //GET, POST, PUT, DELETE, OPTIONS
  //When Object Stringify (JSON)
  //WHEN you get DATA, JSON.parse
  //
  let resp;
  try {
    resp = await fetch(url);
    if (resp.status === 200) {
      const json = await resp.json();
      // console.log(json.content)
      // console.log(json.author)
      return json;
    }
    console.log("Error", resp.status);
  } catch (e) {
    console.error(e);
  }
}


(async()=> {
  const data = await makeRequest("https://api.quotable.io/random")
  console.log(data)
})()
