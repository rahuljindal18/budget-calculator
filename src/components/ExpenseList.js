import React from 'react'
import ExpenseItem from './ExpenseItem'
export const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className="list">
                {
                    expenses.map(expense => (
                        <ExpenseItem key={expense.id} expense={expense} />
                    ))
                }
            </ul>
        </>
    )
}

export default ExpenseList

