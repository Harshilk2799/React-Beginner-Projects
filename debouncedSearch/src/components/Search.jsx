import { useEffect, useState } from "react";

function Search() {
  // const [search, setSearch] = useState("");
  const API_KEY = "KXj9mbjMW3kb_T9pVE6IXZrDlSjMMEseVy0uQJUyhcw";
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  async function getData(search) {
    if (search.trim() !== "") {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`
      );
      const data = await response.json();
      setData(data.results);
      console.log("Response: ", data);
    } else {
      setData([]);
    }
  }
  // This prevents multiple unnecessary API calls, reducing network usage.
  // If the user types again within 500ms, the previous timer is canceled.
  useEffect(() => {
    let timer = setTimeout(() => {
      getData(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  function handleInput(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Search Images (Debounced)</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search images..."
          onChange={handleInput}
        />
      </div>
      <div className="row g-3">
        {data.map((item) => (
          <div className="col-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card shadow-sm">
              <img
                src={item.urls.thumb}
                className="card-img-top"
                height={250}
                alt={item.alt_description || "Unsplash Image"}
              />
              <div className="card-body p-2">
                <p className="card-text small text-truncate">
                  {item.alt_description || "No description"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
