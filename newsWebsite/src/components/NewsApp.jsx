import { useState, useEffect } from "react";
import Card from "./Card";

function NewsApp() {
  const [search, setSearch] = useState("India");
  const [data, setData] = useState([]);
  const API_KEY = "de20542573304cd58647ca1759b6081c";
  async function getData() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles);
    setData(data.articles);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search News"
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update with Trendy</p>
      </div>
      <div className="categoryBtn">
        <button onClick={(e) => setSearch(e.target.value)} value="sports">
          Sports
        </button>
        <button onClick={(e) => setSearch(e.target.value)} value="politics">
          Politics
        </button>
        <button
          onClick={(e) => setSearch(e.target.value)}
          value="entertainment"
        >
          Entertainment
        </button>
        <button onClick={(e) => setSearch(e.target.value)} value="health">
          Health
        </button>
        <button onClick={(e) => setSearch(e.target.value)} value="fitness">
          Fitness
        </button>
      </div>
      <div>{data && <Card data={data} />}</div>
    </div>
  );
}

export default NewsApp;
