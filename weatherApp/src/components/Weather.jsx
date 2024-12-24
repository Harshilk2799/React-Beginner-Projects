import { useState, useEffect } from "react";
import cloud from "../images/Clouds.png";
import clear from "../images/Clear.png";
import err from "../images/error.png";
import mist from "../images/mist.png";
import rain from "../images/Rain.png";

function Weather() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "d7acef1a870436dae6ca922189c6a246";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;

  function handleInput(e) {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  async function handleClick() {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    setData(data);

    if (search === "") {
      setError("Please enter name....");
    } else if (data.cod == "404") {
      setError("Please enter valid name!!!");
    } else {
      setError("");
    }
    setSearch("");
  }
  return (
    <>
      <div className="container">
        <div className="inputs">
          <input
            type="text"
            value={search}
            onChange={handleInput}
            placeholder="Enter city country..."
          />
          <button onClick={handleClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          {error ? (
            <div className="errorPage">
              <p>{error}</p>
              <img src={err} alt="" />
            </div>
          ) : (
            ""
          )}
          {data && data.weather ? (
            <div className="weathers">
              <h2 className="cityName">{data.name}</h2>
              <img
                src={data.weather[0].main === "Clouds" ? cloud : ""}
                alt=""
              />
              <img src={data.weather[0].main === "Rain" ? rain : ""} alt="" />
              <img src={data.weather[0].main === "Clear" ? clear : ""} alt="" />
              <img src={data.weather[0].main === "Mist" ? mist : ""} alt="" />
              <img src={data.weather[0].main === "Haze" ? cloud : ""} alt="" />
              <h2 className="temprature">{Math.trunc(data.main.temp)} °C</h2>
              <p className="climate">{data.weather[0].description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
