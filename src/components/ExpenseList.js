import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
export const ExpenseList = ({
  expenses,
  clearItems,
  handleEdit,
  handleDelete
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {expenses.length ? (
        <button className="btn" onClick={clearItems}>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ExpenseList;
