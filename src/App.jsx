import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
    const dummyExpenses = [
        {
            title: "Eating Out",
            date: new Date(2022, 5, 5),
            amount: 100,
        },
        {
            title: "Going Out",
            date: new Date(2022, 5, 6),
            amount: 300,
        },
        {
            title: "Udemy Courses for React",
            date: new Date(2022, 5, 5),
            amount: 70,
        },
    ];

    const [expenses, setExpenses] = useState(dummyExpenses);

    function addExpenseHandler(expense) {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
