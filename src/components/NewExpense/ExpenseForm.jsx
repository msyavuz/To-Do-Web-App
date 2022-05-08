import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    function titleChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     };
        // });
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     };
        // });
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return {
        //         ...userInput,
        //         enteredDate: event.target.value,
        //     };
        // });
        setEnteredDate(event.target.value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    function cancelHandler(event) {
        event.preventDefault();
        props.onCancelClick();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        value={enteredAmount}
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={cancelHandler}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
