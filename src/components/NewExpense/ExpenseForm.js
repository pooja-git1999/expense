import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle]= useState('');
    const[enteredAmount , setEnteredAmount] = useState('');
    const[enteredDate , setEnteredDate] = useState('');
    
    function TitleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function AmountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }
    function DateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }
    function formHandler(e){
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate
        }
        props.onSaveExpense(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={formHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='1' step='1' value={enteredAmount} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2020-01-01' max='2023-12-31' value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}
