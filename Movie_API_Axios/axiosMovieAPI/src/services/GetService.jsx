import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

// Creating a GET request function
export function getMovie() {
  return api.get("?i=tt3896198&apikey=d8e2c756&s=titanic&page=1");
}
