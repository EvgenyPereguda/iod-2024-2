//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function fetchURLDataAsync(url) {
  let fetchPromise = await fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });

  return fetchPromise;
}

fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

function fetchURLsDataAll(urls) {

    let fetchPromiseArray = [];

    for(let url of urls)
    {
        let fetchPromise = fetch(url).then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Request failed with status ${response.status}`);
          }
        });

        fetchPromiseArray.push(fetchPromise);
    }    

    return Promise.all(fetchPromiseArray);
}

fetchURLsDataAll(["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/1"])
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
