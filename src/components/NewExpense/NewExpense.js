import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {
    const SaveExpense = (expenseDataItem) => {
        const expensData = {
            ...expenseDataItem,
            id: Math.random().toString()
        }
        props.onAddExpenseSave(expensData);
        console.log(expensData);
    }
    props.onAddExpenseSave(SaveExpense)
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={SaveExpense} />
        </div>
    )
}
