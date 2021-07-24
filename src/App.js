import Expenses from "./Components/Expenses/Expenses"
import NewExpense from "./Components/NewExpense/NewExpense"

const App = () => {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 21.79, date: new Date(2021, 6, 11) },
    { id: "e2", title: "New LapTop", amount: 2243.14, date: new Date(2021, 6, 14) },
    { id: "e3", title: "New Desk (Wooden)", amount: 868.55, date: new Date(2021, 7, 14) },
    { id: "e4", title: "Business Meal", amount: 380.44, date: new Date(2021, 8, 21) }
  ]

  const addExpenseHandler = expense => {
    console.log("In App.js")
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
