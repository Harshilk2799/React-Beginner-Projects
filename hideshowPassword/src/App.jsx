import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  function onShowHide() {
    setShow((prev) => !prev);
  }
  return (
    <>
      <h2>Hide/Show Password</h2>
      <div className="input-container">
        <input type={show ? "text" : "password"} />
        <button
          type="button"
          onClick={onShowHide}
          className="input-icon-button"
        >
          {show ? (
            <FaRegEye className="input-icon" />
          ) : (
            <VscEyeClosed className="input-icon" />
          )}
        </button>
      </div>
    </>
  );
}

export default App;
