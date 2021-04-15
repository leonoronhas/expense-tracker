import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showNewExpenseButton, setNewExpenseButton] = useState(true);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Communication from children to Parent 2nd level
    props.onAddExpense(expenseData);
    setNewExpenseButton(!showNewExpenseButton);
  };

  const expenseFormHandler = (event) => {
    setNewExpenseButton(!showNewExpenseButton);
  };

  if (showNewExpenseButton) {
    return (
      <div className="new-expense">
        <button type="button" onClick={expenseFormHandler}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onStopShowExpenseButton={expenseFormHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
