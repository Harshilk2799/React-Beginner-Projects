import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

function CurrencyConvertor() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState(false);

  const getCurrencies = async () => {
    const res = await fetch("https://api.frankfurter.dev/v1/currencies");
    const data = await res.json();
    console.log(data);
    setCurrencies(Object.keys(data)); // Convert Object into Array
  };
  useEffect(() => {
    getCurrencies();
  }, []);

  function handleFromCurrencies(e) {
    // console.log(e.target.value);
    setFromCurrency(e.target.value);
  }

  function handleToCurrencies(e) {
    console.log(e.target.value);
    setToCurrency(e.target.value);
  }

  function handleAmount(e) {
    console.log(e.target.value);
    setAmount(e.target.value);
  }
  async function convertCurrency() {
    setLoader(true);
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}?base=${fromCurrency}&symbols=${toCurrency}`
    );

    const data = await res.json();
    console.log(data);
    console.log(data.rates[toCurrency]);
    setResult("Converted Amount: " + data.rates[toCurrency] + " " + toCurrency);
    setLoader(false);
  }
  return (
    <div className="container">
      <div className="select">
        <div>
          <p>From</p>
          <select value={fromCurrency} onChange={handleFromCurrencies}>
            {currencies.map((curValue, index) => {
              return (
                <option key={index} value={curValue}>
                  {curValue}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p>To</p>
          <select value={toCurrency} onChange={handleToCurrencies}>
            {currencies.map((curValue, index) => {
              return (
                <option key={index} value={curValue}>
                  {curValue}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="amountContainer">
        <p>Amount</p>
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmount}
        />
      </div>

      <div className="converterBtn">
        <button onClick={convertCurrency}>Convertor</button>
      </div>

      <div className="result">
        {loader ? (
          <PulseLoader loading={loader} color="blue" />
        ) : (
          <p>{result}</p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConvertor;

// https://api.frankfurter.dev/v1/currencies
// https://api.frankfurter.dev/v1/latest?amount=1?base=USD&symbols=INR
