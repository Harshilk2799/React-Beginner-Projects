import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import MealInfo from "./components/MealInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </>
  );
}

export default App;
