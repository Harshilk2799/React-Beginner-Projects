import React from "react";

function Card({ data }) {
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (curItem.urlToImage) {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} alt="" />
              <div className="content">
                <a className="title" href={curItem.url} target="_blank">
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => window.open(curItem.url, "_blank")}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
