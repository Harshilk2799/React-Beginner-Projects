import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (num1 && num2) {
      const result = parseInt(num1) + parseInt(num2);
      setSum(result);
    } else {
      alert("Please enter a Number1 and Number2");
    }
  }
  return (
    <>
      <div className="App">
        <div className="container">
          <h2 className="center">Sum Calculator</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="num1">Number 1</label>
              <input
                type="text"
                placeholder="Enter Number1 value"
                name="num1"
                id="num1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="num2">Number 2</label>
              <input
                type="text"
                placeholder="Enter Number2 value"
                name="num2"
                id="num2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
            <div className="center">
              <h3>Your Sum is: {sum}</h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
