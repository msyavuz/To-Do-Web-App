import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const expenses = props.expenses;

    function getYearFilter(yearFilterInput) {
        const yearFilter = yearFilterInput;
        console.log(yearFilter);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChange={getYearFilter}></ExpensesFilter>
            <ExpenseItem
                title={expenses[0].title}
                expenseDate={expenses[0].expenseDate}
                expenseAmount={expenses[0].expenseAmount}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                expenseDate={expenses[1].expenseDate}
                expenseAmount={expenses[1].expenseAmount}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                expenseDate={expenses[2].expenseDate}
                expenseAmount={expenses[2].expenseAmount}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;
