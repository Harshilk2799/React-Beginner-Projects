import { useState } from "react";
import { Data } from "./Data";

function App() {
  const [store, setStore] = useState(Data);
  const [data, setData] = useState("");

  function getData(e) {
    console.log(e.target.value);
    setData(e.target.value);
  }

  const filterOut = store.filter((currentValue) => {
    return (
      currentValue.name.toLowerCase().includes(data) ||
      currentValue.brand.toLowerCase().includes(data)
    );
  });
  return (
    <>
      <div className="container">
        <input type="text" placeholder="Search here..." onChange={getData} />
        <div className="type">
          <h2>Name</h2>
          <h2>Brand</h2>
          <h2>Image</h2>
        </div>
        {filterOut.map((currentValue) => {
          return (
            <div className="itemList" key={currentValue.id}>
              <p>{currentValue.name}</p>
              <p>{currentValue.brand}</p>
              <img src={currentValue.img} alt="Food" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
