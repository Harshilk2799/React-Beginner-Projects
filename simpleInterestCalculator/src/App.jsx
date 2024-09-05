import { useState } from "react";
import "./App.css";

function App() {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const p = parseFloat(principle);
    console.log(p);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      alert("Please enter valid numbers for all fields");
    } else {
      const simpleInterest = (p * r * t) / 100;
      setInterest(simpleInterest);
    }
  }
  function handleReset() {
    // e.preventDefault();
    window.location.reload();
  }
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="textContent">
            <h2>Simple Interest Calculator</h2>
            <p>Calculator your simple interest Easily</p>
          </div>
          <div className="showInterest">
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>
          <form className="inputBox" onSubmit={handleSubmit}>
            <div className="principleAmount">
              <input
                type="text"
                placeholder="₹ Principal amount"
                value={principle}
                onChange={(e) => setPrinciple(e.target.value)}
              />
            </div>
            <div className="rateOfInterest">
              <input
                type="text"
                placeholder="Rate of interest (p.a) %"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="timePeriod">
              <input
                type="text"
                placeholder="Time period (Yr)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="buttonClass">
              <button className="cal">Calculate</button>
              <button className="reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
