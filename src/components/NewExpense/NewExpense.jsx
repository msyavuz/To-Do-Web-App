import "./NewExpense.css";
import AddExpenseTab from "./AddExpenseTab";

function NewExpense(props) {
    return (
        <div className="new-expense">
            <AddExpenseTab onAddExpense={props.onAddExpense}></AddExpenseTab>
        </div>
    );
}

export default NewExpense;
