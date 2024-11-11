import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./FAQ";

function Accordion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(faq);
  }, []);
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElement) => {
          return <FAQ key={curElement.id} curData={curElement} />;
        })}
      </ul>
    </>
  );
}

export default Accordion;
