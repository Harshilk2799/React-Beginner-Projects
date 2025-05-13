import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Description: ", description);
    console.log("Amount: ", amount);
    console.log("Category: ", category);
    const newObj = {
      id: crypto.randomUUID(),
      description: description,
      amount: parseInt(amount),
      category: category,
    };
    // console.log("Obj: ", newObj)
    addExpense(newObj);
    // console.log("All Expense: ", allExpenses)
    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
        >
          <option value="">Select the Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ExpenseForm;
