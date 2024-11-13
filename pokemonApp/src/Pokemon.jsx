import { useEffect, useState } from "react";
import "./index.css";
import PokemonCards from "./PokemonCards";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=220";
  async function fetchPokemon() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        // console.log(curPokemon.url);
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        console.log(data);
        return data;
      });
      //   console.log(detailedPokemonData);
      const detailedResponse = await Promise.all(detailedPokemonData);
      //   console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //   console.log(error);
      setError("Something went wrong!!!");
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  //   search functionality
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((curPokemon) => {
              return (
                <PokemonCards pokemonData={curPokemon} key={curPokemon.id} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pokemon;
