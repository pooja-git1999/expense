import React,{useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm() {
    const [enteredTitle,setEnteredTitle]= useState('');
    const[enteredAmount , setEnteredAmount] = useState('');
    const[enteredDate , setEnteredDate] = useState('');

    function ChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function AmountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }
    function DateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={ChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='1' step='1' onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2020-01-01' max='2023-12-31' onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}
