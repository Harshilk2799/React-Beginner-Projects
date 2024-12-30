import { useState } from "react";

function EMI() {
  const [principle, setPrinciple] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");
  const [emi, setEmi] = useState();
  function handleInput(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);

    let name = e.target.name;
    let value = e.target.value;

    if (name === "principle") {
      setPrinciple(value);
    } else if (name === "interest") {
      setInterest(value);
    } else if (name === "year") {
      setYear(value);
    }
  }

  function calculateEMI() {
    let r = interest;
    if (principle && interest && year) {
      r = r / 12 / 100;
      let powerCal = Math.pow(1 + r, year * 12);
      let emi = principle * ((r * powerCal) / (powerCal - 1));
      setEmi(Math.round(emi));
    }
  }
  return (
    <div className="container">
      <h1>EMI Calculator</h1>
      <div>
        <p>Enter Amount</p>
        <input
          type="text"
          placeholder="Amount"
          onChange={handleInput}
          name="principle"
        />
        <p>Enter Interest</p>
        <input
          type="text"
          placeholder="Interest"
          onChange={handleInput}
          name="interest"
        />
        <p>Enter Year's</p>
        <input
          type="text"
          placeholder="Year's"
          onChange={handleInput}
          name="year"
        />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      <div className="result">
        <p>Your EMI is: {emi}</p>
      </div>
    </div>
  );
}

export default EMI;
