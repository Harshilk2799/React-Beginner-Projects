import { useState } from "react";

function Chips() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  function handleAddChips(e) {
    console.log(e);

    if (e.key === "Enter") {
      if (input.trim() !== "") {
        setData([...data, input]);
        setInput("");
      }
    }
  }

  function clearAll() {
    setData([]);
  }

  function deleteChip(index) {
    setData((prevState) => prevState.filter((item, id) => index !== id));
  }
  return (
    <>
      <div className="chips-wrapper">
        <div className="chips-container">
          <div className="header">
            <h1>Add Tags</h1>
            <p>Press Enter to add a new tag</p>
          </div>

          <div className="input-section">
            <input
              type="text"
              value={input}
              onKeyUp={handleAddChips}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type and press Enter..."
              className="chip-input"
            />
            {data.length > 0 && (
              <button onClick={clearAll} className="clear-btn">
                Clear All
              </button>
            )}
          </div>

          <div className="chips-display">
            {data.map((item, index) => (
              <div key={index} className="chip">
                <span className="chip-text">{item}</span>
                <button
                  onClick={() => deleteChip(index)}
                  className="delete-btn"
                  aria-label={`Remove ${item}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {data.length > 0 && (
            <div className="chip-count">
              {data.length} tag{data.length !== 1 ? "s" : ""} added
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chips;
