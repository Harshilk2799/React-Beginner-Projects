import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MealInfo() {
  let { mealid } = useParams();
  const [info, setInfo] = useState();
  async function GetMealDetail() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const data = await response.json();
    // console.log(data);
    console.log(data.meals[0]);
    setInfo(data.meals[0]);
  }

  useEffect(() => {
    if (info != "") {
      GetMealDetail();
    }
  }, []);

  return (
    info && (
      <div className="mealInfo">
        <img src={info.strMealThumb} />
        <div className="info">
          <h1>Recipe Detail</h1>
          <button>{info.strMeal}</button>
          <h3>Intruction's</h3>
          <p>{info?.strInstructions}</p>
        </div>
      </div>
    )
  );
}

export default MealInfo;
