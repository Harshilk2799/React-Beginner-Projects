import { useState } from "react";
import MealCards from "../components/MealCards";

function MainPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  async function getMealIndo() {
    if (search == "") {
      setMsg("Please Enter Something!");
    } else {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await response.json();
      console.log(data.meals);
      setData(data.meals);
      setMsg("");
    }
  }

  return (
    <>
      <h1 className="head">Food Recipe App</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Dish"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getMealIndo}>Search</button>
        </div>
        <h3 className="error">{msg}</h3>
        <div>
          <MealCards detail={data} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
