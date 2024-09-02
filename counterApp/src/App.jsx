import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // function handleIncrease() {
  //   setCounter(counter + 1);
  // }
  // function handleReset() {
  //   setCounter(0);
  // }
  // function handleDecrease() {
  //   setCounter(counter - 1);
  // }
  return (
    <>
      <div className="counter_wrapper">
        <div className="text_wrapper">
          <h1 id="textContent">Counter: {counter}</h1>
        </div>
        {/* <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button> */}
        <div className="button_wrapper">
          <button
            id="increase"
            onClick={() => {
              setCounter((prevStat) => prevStat + 1);
            }}
          >
            Increase
          </button>
          <button
            id="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
          <button
            id="decrease"
            onClick={() => {
              setCounter((prevStat) => prevStat - 1);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
