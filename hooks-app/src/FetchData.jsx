import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // run only on initial mount/render

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.slice(0, 5).map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchData;

// https://jsonplaceholder.typicode.com/posts
