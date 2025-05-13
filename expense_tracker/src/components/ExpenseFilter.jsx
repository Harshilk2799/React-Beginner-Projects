import React from "react";

function ExpenseFilter({ filteredItem }) {
  return (
    <>
      <select
        name=""
        id=""
        className="form-select mb-3"
        onChange={(e) => {
          // console.log(e.target.value)
          filteredItem(e.target.value);
        }}
      >
        <option value="">Select the Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
}

export default ExpenseFilter;
