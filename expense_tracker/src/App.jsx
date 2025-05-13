import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const initialExpenses = [
    {
      id: 1,
      description: "2 packs of sugar",
      amount: 50,
      category: "Groceries",
    },
    {
      id: 2,
      description: "2 packs of biscuit",
      amount: 60,
      category: "Groceries",
    },
    {
      id: 3,
      description: "electricity bill",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 4,
      description: "1 spotify subscription",
      amount: 500,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "2 boomplay subscription",
      amount: 450,
      category: "Entertainment",
    },
  ];

  const [allExpenses, setAllExpenses] = useState(initialExpenses);
  const [filteredExpenses, setFilteredExpenses] = useState(initialExpenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  function addExpense(newExpense) {
    const updated = [...allExpenses, newExpense];
    setAllExpenses(updated);
    setFilteredExpenses(
      selectedCategory == ""
        ? updated
        : updated.filter((item) => item.category == selectedCategory)
    );
  }

  function handleDelete(id) {
    const updated = allExpenses.filter((item) => item.id !== id);
    setAllExpenses(updated);
    setFilteredExpenses(
      selectedCategory == ""
        ? updated
        : updated.filter((item) => item.category == selectedCategory)
    );
  }

  function filteredItem(category) {
    if (category == "") {
      setFilteredExpenses(allExpenses);
    } else {
      setSelectedCategory(category);
      setFilteredExpenses(
        allExpenses.filter((item) => item.category === category)
      );
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseFilter filteredItem={filteredItem} />
        <ExpenseList items={filteredExpenses} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
