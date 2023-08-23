import { useState } from 'react';
import Card from '../UI/card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
 const [filterdData,setFilteredData]= useState('2020')
  const FilterChangeHandler =(filterData)=>{
    // console.log('expense.js');
setFilteredData(filterData);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filterdData}onFilterChange ={FilterChangeHandler}/>
      {
        props.items.map(
          (expense)=>(
            <ExpenseItem 
              title={expense.title} 
              amount={expense.amount}
              date={expense.date}
            />
          )
        )
      }
      
    </Card>
  );
}

export default Expenses;