import { useState } from "react";

function Clock() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "4em" }}>{time}</h2>
    </div>
  );
}

export default Clock;
