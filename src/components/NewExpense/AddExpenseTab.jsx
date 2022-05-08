import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function AddExpenseTab(props) {
    const [clicked, setClicked] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 100).toString(),
        };
        props.onAddExpense(expenseData);
    }

    function buttonClickHandler() {
        setClicked(true);
    }
    function cancelClickHandler() {
        setClicked(false);
    }

    if (clicked) {
        return (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancelClick={cancelClickHandler}
            />
        );
    } else {
        return <button onClick={buttonClickHandler}>Add Expense</button>;
    }
}
