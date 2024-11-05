import { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  function newQuotes() {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((response) => {
        setQuote(response.data.quote);
        setAuthor("~ by " + response.data.author);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="container">
        <h1>Quote Generator</h1>
        <div className="quote-title">
          <h1>{quote}</h1>
          <p className="author">{author}</p>
        </div>
        <div className="quote-button">
          <button onClick={newQuotes}>New Quotes</button>
        </div>
      </div>
    </>
  );
}

export default App;
