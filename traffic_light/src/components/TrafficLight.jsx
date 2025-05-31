import { useEffect, useState } from "react";

function TrafficLight() {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    const lightColor = setInterval(() => {
      if (red && !yellow && !green) {
        setGreen(true);
        setRed(false);
      } else if (green && !red && !yellow) {
        setYellow(true);
        setGreen(false);
      } else if (yellow && !green && !red) {
        setRed(true);
        setYellow(false);
      }
    }, 2000);

    return () => {
      clearInterval(lightColor);
    };
  }, [red, yellow, green]);
  return (
    <div className="container">
      <h2>Traffic Light</h2>
      <p
        className="circle"
        style={{ backgroundColor: green === true ? "green" : "silver" }}
      ></p>
      <p
        className="circle"
        style={{ backgroundColor: yellow === true ? "yellow" : "silver" }}
      ></p>
      <p
        className="circle"
        style={{ backgroundColor: red === true ? "red" : "silver" }}
      ></p>
    </div>
  );
}

export default TrafficLight;
