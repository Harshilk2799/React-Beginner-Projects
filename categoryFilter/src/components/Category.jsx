import Navbar from "../components/Navbar";
import { allData } from "./Datas";
import { useState } from "react";

function Category() {
  const [data, setData] = useState(allData);
  const [inputVal, setInputVal] = useState("");

  function selectItem(e) {
    console.log(e.target.value);
    setInputVal(e.target.value);
  }

  //   if (inputVal == "Product A to Z") {
  //     data.sort((a, b) => {
  //       let nameA = a.name;
  //       let nameB = b.name;

  //       if (nameA < nameB) {
  //         console.log("Name A: ", nameA);
  //         console.log("Name B: ", nameB);
  //         return -1;
  //       }
  //     });
  //   }

  //   if (inputVal == "Product Z to A") {
  //     data.sort((a, b) => {
  //       let nameA = a.name;
  //       let nameB = b.name;

  //       if (nameA > nameB) {
  //         console.log("Name A: ", nameA);
  //         console.log("Name B: ", nameB);
  //         return -1;
  //       }
  //     });
  //   }

  if (inputVal == "Product A to Z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (inputVal == "Product Z to A") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (inputVal == "Price High to Low") {
    data.sort((a, b) => {
      return b.price - a.price;
    });
  }
  if (inputVal == "Price Low to High") {
    data.sort((a, b) => {
      return a.price - b.price;
    });
  }

  return (
    <div className="container">
      <Navbar />
      <div className="category">
        <div>
          <label>Category: </label>
          <select id="select" onChange={selectItem}>
            <option value="Product A to Z">Product A to Z</option>
            <option value="Product Z to A">Product Z to A</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Price Low to High">Price Low to High</option>
          </select>
        </div>
      </div>
      <div className="product">
        {data.map((curValue, index) => {
          return (
            <div className="card" key={curValue.id}>
              <img src={curValue.img} />
              <div className="text">
                <p>Model: {curValue.name}</p>
                <p>Price: {curValue.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
