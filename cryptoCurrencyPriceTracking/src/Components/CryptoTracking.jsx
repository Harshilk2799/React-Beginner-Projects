import { useEffect, useState } from "react";

function CryptoTracking() {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");
  async function cryptoCurrency() {
    try {
      const res = await fetch(
        "https://openapiv1.coinstats.app/coins?currency=INR",
        {
          headers: {
            "X-API-KEY": "APIKEY",
          },
        }
      );

      const data = await res.json();
      console.log("Data", data);
      setCryptoData(data.result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    cryptoCurrency();
  }, []);

  function handleInput(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <div className="container">
      <div>
        <h1>Crypto Currency Price Tracking</h1>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Search Here..."
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Icon</th>
              <th>Symbol</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Available Supply</th>
              <th>Volume (24hr)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData
              .filter((value) => {
                return value.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((value, index) => {
                return (
                  <tr>
                    <td>{value.rank}</td>
                    <td>{value.name}</td>
                    <div>
                      <img src={value.icon} width="45px" alt="Crypto Icon" />
                    </div>

                    <td>{value.symbol}</td>
                    <td>{value.marketCap.toFixed(2)}</td>
                    <td>{value.price.toFixed(2)}</td>
                    <td>{value.availableSupply}</td>
                    <td>{value.volume.toFixed(2)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CryptoTracking;
