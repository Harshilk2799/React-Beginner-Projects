import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [data, setData] = useState("");

  function calculation() {
    setData(eval(data).toString());
  }
  function back() {
    setData(data.slice(0, -1));
  }
  return (
    <div className="container">
      <div className="inputBox">
        <input type="text" value={data} />
      </div>
      <div className="buttonBox">
        <button
          onClick={(e) => setData("")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          C
        </button>
        <button
          value="%"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "white", color: "black" }}
        >
          %
        </button>
        <button
          onClick={back}
          style={{ backgroundColor: "white", color: "black" }}
        >
          x
        </button>
        <button
          value="/"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          /
        </button>
        <button
          value="7"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          7
        </button>
        <button
          value="8"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          8
        </button>
        <button
          value="9"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          9
        </button>
        <button
          value="*"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          x
        </button>
        <button
          value="4"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          4
        </button>
        <button
          value="5"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          5
        </button>
        <button
          value="6"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          6
        </button>
        <button
          value="-"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          -
        </button>
        <button
          value="1"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          3
        </button>
        <button
          value="+"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          +
        </button>
        <button
          value="00"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          00
        </button>
        <button
          value="0"
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          0
        </button>
        <button
          value="."
          onClick={(e) => setData(data.concat(e.target.value))}
          style={{ backgroundColor: "black", color: "white" }}
        >
          .
        </button>
        <button
          onClick={calculation}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
