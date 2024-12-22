import { useState } from "react";

function DictionaryApp() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  function handleInput(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  async function SearchDictionary() {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const data = await res.json();
    console.log(data);
    setData(data[0]);
  }
  return (
    <>
      <div className="app">
        <h1>Dictionary App</h1>
        <div className="container">
          <div className="searchBar">
            <input
              type="text"
              onChange={handleInput}
              placeholder="Search Word's"
            />
            <button onClick={SearchDictionary}>Search</button>
          </div>
          <div className="datas">
            {data && (
              <div className="datas">
                <h2>Word: {data.word}</h2>
                <p>Part of Speech: {data.meanings[0].partOfSpeech}</p>
                <p>Definition: {data.meanings[0].definitions[0].definition}</p>
                <p>Example: {data.meanings[0].definitions[0].example}</p>
                <p>Synonyms: {data.meanings[0].definitions[0].synonyms[0]}</p>
                <button
                  onClick={() => window.open(data.sourceUrls[0], "_blank")}
                >
                  Read more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DictionaryApp;
