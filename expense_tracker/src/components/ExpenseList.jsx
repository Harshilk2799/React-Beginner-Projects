import React from "react";

function ExpenseList({ items, handleDelete }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total: ₹</td>
            <td>
              {items.reduce((acc, itemValue) => acc + itemValue.amount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseList;
