import { useState } from "react";

// https://api.unsplash.com/search/photos?page=1&&query=${searchValue}&client_id=${API_KEY}
function ImageApp() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let API_KEY = "KXj9mbjMW3kb_T9pVE6IXZrDlSjMMEseVy0uQJUyhcw";
  function handleSearch(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  async function handleImageFetch() {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`
    );
    // console.log(res);
    const data = await res.json();
    console.log(data);
    setData(data.results);
  }
  return (
    <>
      <div className="container">
        <h1>Image Search App</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Search Images..."
            onChange={handleSearch}
          />
          <button onClick={handleImageFetch}>Search</button>
        </div>
        <div className="images">
          {data.map((curValue, index) => {
            return <img src={curValue.urls.regular} alt="" key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ImageApp;
