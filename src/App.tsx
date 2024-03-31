import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseFilter";
import categories from "./categories";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Netflix",
      category: "Entertainment",
      amount: 499,
    },
    {
      id: 2,
      description: "Tea",
      category: "Groceries",
      amount: 150,
    },
    {
      id: 3,
      description: "Rice",
      category: "Groceries",
      amount: 100,
    },
    {
      id: 4,
      description: "Phone Bill",
      category: "Utilities",
      amount: 500,
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visbleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="container col-8  mt-4">
      <h3 className="text-center">Expense Tracker</h3>
      <Form />
      <ExpenseFilter
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visbleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
