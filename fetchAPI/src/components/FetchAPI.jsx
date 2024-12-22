import { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("Data: ", data);
      setData(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data ? (
        data.map((curVal) => {
          return (
            <div className="card" key={curVal.id}>
              <h2>ID: {curVal.id}</h2>
              <h3>Title: {curVal.title}</h3>
              <p>Body: {curVal.body}</p>
            </div>
          );
        })
      ) : (
        <p>Data not found!!!</p>
      )}
    </div>
  );
}
export default FetchAPI;
