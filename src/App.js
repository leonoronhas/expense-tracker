import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <ExpenseItem title="Car Insurance" amount={259.55} date={new Date(2021,2,28)}></ExpenseItem>
    </div>
  );
}

export default App;
