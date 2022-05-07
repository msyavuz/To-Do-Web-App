import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    let expenses = [
        {
            title: "Eating Out",
            expenseDate: new Date(2022, 5, 5),
            expenseAmount: 100,
        },
        {
            title: "Going Out",
            expenseDate: new Date(2022, 5, 6),
            expenseAmount: 300,
        },
        {
            title: "Udemy Courses for React",
            expenseDate: new Date(2022, 5, 5),
            expenseAmount: 70,
        },
    ];

    function addExpenseHandler(expense) {
        console.log("In app.js");
        expenses.push(expense);
        console.log(expenses);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
