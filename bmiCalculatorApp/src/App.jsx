import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiResult, setBmiResult] = useState("");
  const [message, setMessage] = useState("");

  function calculateBMI(e) {
    e.preventDefault();

    if (weight && height) {
      const bmi = ((weight / (height * height)) * 703).toFixed(1);
      setBmiResult(bmi);

      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are Normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are Overweight");
      } else {
        setMessage("Obese");
      }
    } else {
      setBmiResult("");
      alert("Please enter both weight and height");
    }
  }

  function handleReload(e) {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>BMI Calculator</h2>
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="weight">Weight (lbs)</label>
              <input
                type="text"
                placeholder="Enter Weight value"
                name="weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="height">Height (in)</label>
              <input
                type="text"
                placeholder="Enter Height value"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn btn-outline" onClick={handleReload}>
                Reload
              </button>
            </div>
            <div>
              <div className="center">
                <h3>Your BMI is: {bmiResult}</h3>
                <p>{message}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
