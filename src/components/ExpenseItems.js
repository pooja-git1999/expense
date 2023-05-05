import './ExpenseItem.css';

function ExpenseItems() {
    const expenseDate = new Date(2023, 2, 28);
    const expenseTitle = "car insurence";
    const expenseAmount = 455.25;
    return (
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}
export default ExpenseItems;