import { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [birthdate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  function handleAgeCalculator() {
    if (!birthdate) {
      alert("Please select a birth date!");
      return;
    }
    let today = new Date();
    let birthdateDate = new Date(birthdate);
    console.log("Today: ", today);
    console.log("Birthday: ", birthdateDate);

    // Calculate age
    let ageYears = today.getFullYear() - birthdateDate.getFullYear();
    let ageMonths = today.getMonth() - birthdateDate.getMonth();
    let ageDays = today.getDate() - birthdateDate.getDate();
    console.log("Age Years: ", ageYears);
    console.log("Age Months: ", ageMonths);
    console.log("Age Days: ", ageDays);

    // Adjust calculations if current month/day is before birth month/day
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    // Handle negative days
    if (ageDays < 0) {
      let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
      ageMonths--;
    }
    // Set the calculated age
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  }

  console.log("Age: ", age);
  return (
    <div className="Container">
      <h2 className="heading container_title">Age Calculator</h2>
      <p className="para container_title">
        The Age Calculator can determine the age or interval between two dates.
        The calculated age will be displayed in years,
      </p>
      <div className="Container_middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="date"
          />
          <div className="button_div">
            <button className="button-65" onClick={handleAgeCalculator}>
              Calculate Age
            </button>
            <button className="button-65">Reset</button>
          </div>
        </div>

        <div className="left">
          <div className="Container_middle_para">
            <h1>
              Your Age is:{" "}
              {age && (
                <span>
                  {age.years} Years, {age.months} Months, {age.days} Days Old
                </span>
              )}
            </h1>
          </div>
          <h1 className="age_heading"></h1>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
