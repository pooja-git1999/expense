import ExpenseItems from './components/ExpenseItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}
function User() {
  return (
    <div>
      <h1>Expense</h1>
      <ExpenseItems/>
    </div>
  )
}

export default App;
