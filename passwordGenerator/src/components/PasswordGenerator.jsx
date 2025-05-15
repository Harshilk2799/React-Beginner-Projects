import React, { useState } from "react";
import { FaCopy, FaLock } from "react-icons/fa";

function PasswordGenerator() {
  let Symbols = "!@#$%^&*().";
  let UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";

  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleGeneratePassword() {
    let charSet = "";
    let passwordChar = "";

    if (upperCase || lowerCase || numbers || symbols) {
      if (upperCase) {
        charSet += UPPER_CASE;
      }
      if (lowerCase) {
        charSet += lower_case;
      }
      if (numbers) {
        charSet += number;
      }
      if (symbols) {
        charSet += Symbols;
      }

      console.log(
        "Number: ",
        Math.floor(Math.random() * charSet.length),
        "Random: ",
        Math.random() * charSet.length,
        "Length: ",
        charSet.length
      );

      for (let i = 0; i < passwordLength; i++) {
        passwordChar += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }

      setPassword(passwordChar);
      setErrorMsg("");
    } else {
      setErrorMsg("Please select at least one character type");
    }
  }

  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary bg-gradient rounded-circle p-2 me-3">
              <FaLock className="text-white" size={20} />
            </div>
            <h2 className="mb-0 fw-bold text-primary">Password Generator</h2>
          </div>

          {errorMsg && (
            <div className="alert alert-danger mb-3" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg border-end-0 bg-light"
              placeholder="Your secure password"
              readOnly
              value={password}
            />
            <button
              className="btn btn-outline-secondary border-start-0 bg-light"
              onClick={handleCopy}
              type="button"
            >
              <FaCopy />
            </button>
          </div>

          <div className="mb-4">
            <label
              htmlFor="passwordLength"
              className="form-label d-flex justify-content-between"
            >
              <span>Password Length</span>
              <span className="badge bg-primary rounded-pill">
                {passwordLength}
              </span>
            </label>
            <input
              type="range"
              className="form-range"
              // min={passwordLength}
              // max="25"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              id="passwordLength"
            />
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  checked={upperCase}
                  onChange={() => setUpperCase(!upperCase)}
                  type="checkbox"
                  id="upperCase"
                />
                <label className="form-check-label" htmlFor="upperCase">
                  Include Uppercase
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  checked={lowerCase}
                  onChange={() => setLowerCase(!lowerCase)}
                  type="checkbox"
                  id="lowerCase"
                />
                <label className="form-check-label" htmlFor="lowerCase">
                  Include Lowercase
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
                  type="checkbox"
                  id="number"
                />
                <label className="form-check-label" htmlFor="number">
                  Include Numbers
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                  type="checkbox"
                  id="symbols"
                />
                <label className="form-check-label" htmlFor="symbols">
                  Include Symbols
                </label>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg w-100 fw-bold"
            onClick={handleGeneratePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
