import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { getMovie } from "./services/GetService";

function Movie() {
  const [data, setData] = useState([]);
  //   const API =
  //     "http://www.omdbapi.com/?i=tt3896198&apikey=d8e2c756&s=titanic&page=1";

  async function getMovieData() {
    try {
      const res = await getMovie();
      //   const res = await axios.get(API);
      //   console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      //   console.log(error);
      console.log(error.response.status);
      //   console.log(error.response.data);
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <ul className="container grid-four--cols">
      {data.map((curElement) => (
        <Card key={curElement.imdbID} movieData={curElement} />
      ))}
    </ul>
  );
}

export default Movie;
