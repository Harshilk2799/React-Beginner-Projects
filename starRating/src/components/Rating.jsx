import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState(0);

  console.log(rating);
  const arr = new Array(5).fill(0);
  console.log(arr);
  return (
    <>
      <div className="head">
        <h1>Star Rating</h1>
        <p>Please Rate Us</p>
      </div>
      <div className="container">
        {arr.map((curValue, index) => {
          return (
            <span
              className={
                (hover == 0 && index < rating) || index < hover
                  ? "colored"
                  : "unColor"
              }
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              key={index}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Rating;
