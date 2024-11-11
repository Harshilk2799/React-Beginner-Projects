import { useState } from "react";

function FAQ({ curData }) {
  const { question, answer } = curData;
  const [activeId, setActiveId] = useState(false);

  function handleToggle() {
    setActiveId(!activeId);
  }
  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{question}</p>
          <button onClick={handleToggle}>{activeId ? "Close" : "Show"}</button>
        </div>
        <p>{activeId && answer}</p>
      </li>
    </>
  );
}

export default FAQ;
