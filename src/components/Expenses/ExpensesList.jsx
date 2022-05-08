import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense, index) => (
                <ExpenseItem
                    key={index}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                ></ExpenseItem>
            ))}
        </ul>
    );
}
